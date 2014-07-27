

/**
 * 
 */
function Orm(){

	/**
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
	this.fetchJson = function (url){
			var ajaxObj = "";;
			ajaxObj = $.ajax({
							url: url,
			                async: false,
							dataType:'json',
							type:'json'
							//success: function (json){
							//	jsons = json;
							//}
						}).done(function (j){
							return j;
						});

			this.json = ajaxObj.responseJSON;
	};

	this.fetchAll = function (){
		var fc = new findClass();
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
function findClass(){

	this.dataOriginal;
	this.auxiliar;

	this.findClass = function (){
		return this.data;
	}
	
	this.setData = function (json){
		this.dataOriginal = json;
		return json;
	};
	
	this.where = function (params){
		
		this.auxiliar = this.dataOriginal;

		var countParams = Object.keys(params).length;
		var auxiliar = new Array();
		var check = 0;

		$.each(this.dataOriginal, function (i, item) {

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
		
		return auxiliar;

	};
	
	this.join = function(){

	};

}

/**
 *
 */
function executeClass(){

}

/**
 *
 */
function jhql(jhql){

}