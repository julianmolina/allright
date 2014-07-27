/**
 *
 *  This library try emulate any frameworks php sintax,
 *  we was inspirated for phalcon framework with it struct
 *  and PHQL syntax.
 * 
 * 
 * 
 * @author Julian Arturo Molina Castiblanco 
 * @author Esteban Vera
 * @version 0.1 beta
 * @copyright open-source
 */

function Model(model_name){

	/**
	 *
	 * 
	 */
	this.json;

	/**
	 *
	 */
	this.setJson = function (value){
		this.json = value;
	}

	/**
	 *
	 */
	this.getJson = function (){
		return this.json;
	};

	/**
	 *
	 */
	this.fetchJson = function (){

		var ajaxObj = "";
		ajaxObj = $.ajax({
		 			 url: model_name,
		             async: false,
					 dataType:'json',
					 type:'json'
				   }).done(function (j){
						return j;
				   });

		this.json = ajaxObj.responseJSON;
	};

	this.fetch = function (){
		var fc = new FindClass();
		fc.setData(this.json);
     	return fc;
	};

	/**
	 *
	 */
	this.createQuery =  function (){

	};

	/**
	 *
	 */
	this.execute = function (){

	};

}

/**
 *
 */
function FindClass(){

	this.arrayJson;
	this.auxiliar = [];

	/**
	 *
	 */
	this.setData = function (json){
		this.arrayJson = json;
		return json;
	};
	
	/**
	 * Prepare and return data conditions into json data.
	 */
	this.where = function (params){

		var countParams = Object.keys(params).length;
		var check = 0;
		var auxiliar = [];

		$.each(this.arrayJson, function (i, item) {

			for(var value in item){
				check = 0;
				for(var v in params){
					if(item[v] == params[v]){
						check++;
					}
				}
			}

			if(parseInt(countParams) == parseInt(check))
				auxiliar.push(item);
			
		});
		
		this.arrayJson = auxiliar;

		return this;

	};
	
	/**
	 *
	 */
	this.like = function(params){

	};

	/**
	 * return results fetched.
	 */
	this.get = function (){
		return this.arrayJson;
	}
}

/**
 * This class build a syntax sql to controllers queries.
 */
function Jhql(jhql){

}

/**
 * Excecute sentence SQL 
 */
function ExecuteClass(){

}

/**
 * This class emulate the const __FILE__ from php and __DIR__ constant also
 * the method basePath as basePath of any framework php
 * @version 1.0
 */
function BasePath(){

  /**
   *
   */
  this.component = new Array();

  /**
   *
   */
  this.srcFile = location.pathname;

  /**
   *
   */
  this.__FILE__ = (function() {
     var scripts = document.getElementsByTagName('script');
     var script = scripts[scripts.length - 1].src;
     return script.substring(0, script.lastIndexOf('/')) + '/';
  }());

  /**
   * Building dirname seems to dirname function from PHP.
   */
  this.dirname = function (path_ever){

     var performedPath = new Array();
     var lastPath = '';
     var count = 0;
     var splitVar = '';

     performedPath = path_ever.split("/");
     count = performedPath.length-1;

     for(i = 0; i < count; i++){
       if(i < count-1)
         splitVar = '/';
       else
         splitVar = '';
       lastPath += performedPath[i]+splitVar;
     }

     return lastPath;
  };

  /**
   * Building basepath to jQuery or Javascript
   */
  this.base = function (){

    var explode = this.__FILE__.split('/');
    var middlePath = '';
    var splitVar = '';

    for (var i = 3; i < explode.length; i++) {

      if(i == 3) middlePath += '/';

      if(i < explode.length-2)
        splitVar = '/';
      else
        splitVar = '';

      middlePath += explode[i]+splitVar;
      if(explode[i] == 'js')
        break;
    }

    return this.dirname(this.dirname(middlePath));
  };

  this.redirect = function (path){
    location.href = this.dirname(this.dirname(this.srcFile))+path;
  };

  /**
   *
   */
  this.confirm = function(message, callback){
    if(confirm(message)){
      callback();
    }
  };

  /**
   *
   */
  this.setData = function (component){
    this.component[component] = $(component);
  };

  /**
   *
   */
  this.getData = function (component){
    return this.component[component];
  };
}
