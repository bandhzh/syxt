 

 /* HashTable = function(){
  	var normalHashTable = {};
  	var length = 0;
  	
  	this.isEmpty = function() {   
          return (length < 1);   
      }; 
  	this.clear = function() {   
         normalHashTable = {};
         length = 0; 
      };
  	this.size = function(){
  		return	length;
  	};
  	this.put = function(_key, _value){
  		if(!this.containsKey(_key)){
  			length ++;
  		}
  		return normalHashTable[_key] = _value;
  	};
  	this.get = function(_key){
  		return this.containsKey(_key) ? normalHashTable[_key] : null;
  	};
  	this.containsKey = function(_key) {   
          return (_key in normalHashTable);   
      }; 
  	this.containsValue = function ( _value ){     
          for(var prop in normalHashTable){     
                if(normalHashTable[prop] == _value){     
                    return true;     
                }     
          }     
          return false;     
      };   
      this.remove = function(_key){
  		if(_key in normalHashTable){
  			var value = normalHashTable[_key];
  			if(delete normalHashTable[_key]){
  				length --;
  				return value;
  			}	
  		}
  		return null;
  	};
  	this.keys = function(){
  		var arr = new Array();
  		for(var _key in normalHashTable){
  			arr.push(_key);
  		}
  		return arr;
  	};
  	this.values = function(){
  		var arr = new Array();
  		for(var _key in normalHashTable){
  			arr.push(normalHashTable[_key]);
  		}
  		return arr;
  	};
  	*//**    
       * 遍历Map,执行处理函数     
       * @param {Function} 回调函数 function(arrary){..}    
       *//*     
      this.each = function(fn){
          for (var key in normalHashTable) { 
            var value = normalHashTable[key], pair = [key, value];   
            pair.key = key;   
            pair.value = value;   
            fn(pair);   
          }   
      };
  }*/

  /**
  		 * Sample usage.
  		 * String.format("i am {0}, {1}", "strong", "haha");
  		 * @param join
  		 * @return
  		 */
  		/*String.format = function(fmt) {
  			var params = arguments;
  			var pattern = /{{|{[1-9][0-9]*}|\x7B0\x7D/g;
  			return fmt.replace(pattern, function(p) {
  				if (p == "{{")
  					return "{";
  				return params[parseInt(p.substr(1, p.length - 2), 10) + 1];
  			});   
  		};
  		// 衍生源JS对象
  		// String.prototype.trim
  		String.prototype.trim = function(){
  			return this.replace(/^\s+|\s+$/, "");
  		};
  		
  		// String.prototype.htmlEncode
  		String.prototype.htmlEncode = function(){
  			var div = document.createElement("DIV");
  			return function(){
  				var text;
  				div.appendChild(document.createTextNode(this));
  				text = div.innerHTML;
  				div.innerHTML = "";
  				return text;
  			};
  		}();
  		*//**
  		 * 截取字符串，兼容中文的情况
  		 *//*
  		String.prototype.sub = function(n){
  			var r = /[^\x00-\xff]/g;
  			if(this.replace(r, "mm").length <= n){
  				return this;
  			}
  			var m = Math.floor(n/2);
  			for(var i=m; i<this.length; i++){
  				if(this.substr(0, i).replace(r, "mm").length >= n){
  					return this.substr(0, i) + "...";
  				}
  			}
  			return this;
  		};
  		
  		*//**  
  	     * 扩展基础类  
  	     * 得到字符串的长度，包括中文和英文  
  	     **//*  
  	    String.prototype.byteLength = function() {
  	    	var arr = this.match(/[^\x00-\xff]/ig);   
  	        return this.length + (arr? arr.length : 0);
  	    };
  	    
  	    String.prototype.replaceAll = function(s1,s2) {
  	        return this.replace(new RegExp(s1,"gm"),s2);
  	    }
  	    
  	    //一个应该常用的javascript string函数，不知为何没有直接提供
  	    String.prototype.escapeHTML = function () {                                       
  	        return this.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  	    };
  		
  	    String.prototype.unescapeHTML = function () {                                       
  	        return this.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'\"').replace(/&nbsp;/g,' ');
  	    };
  	    
  	    Array.prototype.indexOf = function (val) {
  	    	for (var i = 0; i < this.length; i++) {
  	    		if (this[i] == val) {
  	    			return i;
  	    		}
  	    	}
  	    	return -1;
  	    };
  	    *//**
  	     *  方法:Array.remove(dx)
  	     *  功能:根据元素值删除数组元素.
  	     *  参数:元素值
  	     *  返回:在原数组上修改数组
  	     *//*
  	    Array.prototype.remove = function (val) {
  	    	var index = this.indexOf(val);
  	    	if (index > -1) {
  	    		this.splice(index, 1);
  	    	}
  	    };*/
  	    
  	    Date.prototype.pattern = function(fmt) {      
  		    var o = {         
  		    "M+" : this.getMonth()+1, //月份         
  		    "d+" : this.getDate(), //日         
  		    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
  		    "H+" : this.getHours(), //小时         
  		    "m+" : this.getMinutes(), //分         
  		    "s+" : this.getSeconds(), //秒         
  		    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
  		    "S" : this.getMilliseconds() //毫秒         
  		    };         
  		    var week = {         
  		    "0" : "\u65e5",         
  		    "1" : "\u4e00",         
  		    "2" : "\u4e8c",         
  		    "3" : "\u4e09",         
  		    "4" : "\u56db",         
  		    "5" : "\u4e94",         
  		    "6" : "\u516d"        
  		    };         
  		    if(/(y+)/.test(fmt)){         
  		        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
  		    }         
  		    if(/(E+)/.test(fmt)){         
  		        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);         
  		    }         
  		    for(var k in o){         
  		        if(new RegExp("("+ k +")").test(fmt)){         
  		            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
  		        }         
  		    }         
  		    return fmt;         
  		};
  		
  		/*function getUrlParam(name) {
              var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
              var r = window.location.search.substr(1).match(reg);  //匹配目标参数
              if (r != null) return unescape(r[2]); return null; //返回参数值
          }*/
  		
  		
  	  /*	jQuery.extend({  
  	  	    browser: function()   
  	  	    {  
  	  	        var  
  	  	        rwebkit = /(webkit)\/([\w.]+)/,  
  	  	        ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,  
  	  	        rmsie = /(msie) ([\w.]+)/,  
  	  	        rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,      
  	  	        browser = {},  
  	  	        ua = window.navigator.userAgent,  
  	  	        browserMatch = uaMatch(ua);  
  	  	  
  	  	        if (browserMatch.browser) {  
  	  	            browser[browserMatch.browser] = true;  
  	  	            browser.version = browserMatch.version;  
  	  	        }  
  	  	        return { browser: browser };  
  	  	    },  
  	  	});  */
  	  	
  	  	
  	  /*
  		jQuery.extend(jQuery.validator.messages, {
  	        required: "必选字段",
  			remote: "请修正该字段",
  			email: "请输入正确格式的电子邮件",
  			url: "请输入合法的网址",
  			date: "请输入合法的日期",
  			dateISO: "请输入合法的日期 (ISO).",
  			number: "请输入合法的数字",
  			digits: "只能输入整数",
  			creditcard: "请输入合法的信用卡号",
  			equalTo: "请再次输入相同的值",
  			accept: "请输入拥有合法后缀名的字符串",
  			maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),
  			minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),
  			rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
  			range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
  			max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
  			min: jQuery.validator.format("请输入一个最小为 {0} 的值")
  	});*/
  		
  		/*  toastr.options = {
  				  "closeButton": true,
  				  "debug": false,
  				  "positionClass": "toast-top-center",
  				  "onclick": null,
  				  "showDuration": "1000",
  				  "hideDuration": "1000",
  				  "timeOut": "5000",
  				  "extendedTimeOut": "1000",
  				  "showEasing": "swing",
  				  "hideEasing": "linear",
  				  "showMethod": "fadeIn",
  				  "hideMethod": "fadeOut"
  				}*/
  		  
  	  	
/*var Demo = function () {

    // Handle Theme Settings
    var handleTheme = function () {

        var panel = $('.theme-panel');

        if ($('body').hasClass('page-boxed') === false) {
            $('.layout-option', panel).val("fluid");
        }

        $('.sidebar-option', panel).val("default");
        $('.page-header-option', panel).val("fixed");
        $('.page-footer-option', panel).val("default");
        if ($('.sidebar-pos-option').attr("disabled") === false) {
            $('.sidebar-pos-option', panel).val(App.isRTL() ? 'right' : 'left');
        }

        //handle theme layout
        var resetLayout = function () {
            $("body").
            removeClass("page-boxed").
            removeClass("page-footer-fixed").
            removeClass("page-sidebar-fixed").
            removeClass("page-header-fixed").
            removeClass("page-sidebar-reversed");

            $('.page-header > .page-header-inner').removeClass("container");

            if ($('.page-container').parent(".container").size() === 1) {
                $('.page-container').insertAfter('body > .clearfix');
            }

            if ($('.page-footer > .container').size() === 1) {
                $('.page-footer').html($('.page-footer > .container').html());
            } else if ($('.page-footer').parent(".container").size() === 1) {
                $('.page-footer').insertAfter('.page-container');
                $('.scroll-to-top').insertAfter('.page-footer');
            }

            $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");

            $('body > .container').remove();
        };

        var lastSelectedLayout = '';

        var setLayout = function () {

            var layoutOption = $('.layout-option', panel).val();
            var sidebarOption = $('.sidebar-option', panel).val();
            var headerOption = $('.page-header-option', panel).val();
            var footerOption = $('.page-footer-option', panel).val();
            var sidebarPosOption = $('.sidebar-pos-option', panel).val();
            var sidebarStyleOption = $('.sidebar-style-option', panel).val();
            var sidebarMenuOption = $('.sidebar-menu-option', panel).val();
            var headerTopDropdownStyle = $('.page-header-top-dropdown-style-option', panel).val();


            if (sidebarOption == "fixed" && headerOption == "default") {
                alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
                $('.page-header-option', panel).val("fixed");
                $('.sidebar-option', panel).val("fixed");
                sidebarOption = 'fixed';
                headerOption = 'fixed';
            }

            resetLayout(); // reset layout to default state

            if (layoutOption === "boxed") {
                $("body").addClass("page-boxed");

                // set header
                $('.page-header > .page-header-inner').addClass("container");
                var cont = $('body > .clearfix').after('<div class="container"></div>');

                // set content
                $('.page-container').appendTo('body > .container');

                // set footer
                if (footerOption === 'fixed') {
                    $('.page-footer').html('<div class="container">' + $('.page-footer').html() + '</div>');
                } else {
                    $('.page-footer').appendTo('body > .container');
                }
            }

            if (lastSelectedLayout != layoutOption) {
                //layout changed, run responsive handler: 
                App.runResizeHandlers();
            }
            lastSelectedLayout = layoutOption;

            //header
            if (headerOption === 'fixed') {
                $("body").addClass("page-header-fixed");
                $(".page-header").removeClass("navbar-static-top").addClass("navbar-fixed-top");
            } else {
                $("body").removeClass("page-header-fixed");
                $(".page-header").removeClass("navbar-fixed-top").addClass("navbar-static-top");
            }

            //sidebar
            if ($('body').hasClass('page-full-width') === false) {
                if (sidebarOption === 'fixed') {
                    $("body").addClass("page-sidebar-fixed");
                    $("page-sidebar-menu").addClass("page-sidebar-menu-fixed");
                    $("page-sidebar-menu").removeClass("page-sidebar-menu-default");
                    Layout.initFixedSidebarHoverEffect();
                } else {
                    $("body").removeClass("page-sidebar-fixed");
                    $("page-sidebar-menu").addClass("page-sidebar-menu-default");
                    $("page-sidebar-menu").removeClass("page-sidebar-menu-fixed");
                    $('.page-sidebar-menu').unbind('mouseenter').unbind('mouseleave');
                }
            }

            // top dropdown style
            if (headerTopDropdownStyle === 'dark') {
                $(".top-menu > .navbar-nav > li.dropdown").addClass("dropdown-dark");
            } else {
                $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");
            }

            //footer 
            if (footerOption === 'fixed') {
                $("body").addClass("page-footer-fixed");
            } else {
                $("body").removeClass("page-footer-fixed");
            }

            //sidebar style
            if (sidebarStyleOption === 'compact') {
                $(".page-sidebar-menu").addClass("page-sidebar-menu-compact");
            } else {
                $(".page-sidebar-menu").removeClass("page-sidebar-menu-compact");
            }

            //sidebar menu 
            if (sidebarMenuOption === 'hover') {
                if (sidebarOption == 'fixed') {
                    $('.sidebar-menu-option', panel).val("accordion");
                    alert("Hover Sidebar Menu is not compatible with Fixed Sidebar Mode. Select Default Sidebar Mode Instead.");
                } else {
                    $(".page-sidebar-menu").addClass("page-sidebar-menu-hover-submenu");
                }                
            } else {
                $(".page-sidebar-menu").removeClass("page-sidebar-menu-hover-submenu");
            }

            //sidebar position
            if (App.isRTL()) {
                if (sidebarPosOption === 'left') {
                    $("body").addClass("page-sidebar-reversed");
                    $('#frontend-link').tooltip('destroy').tooltip({
                        placement: 'right'
                    });
                } else {
                    $("body").removeClass("page-sidebar-reversed");
                    $('#frontend-link').tooltip('destroy').tooltip({
                        placement: 'left'
                    });
                }
            } else {
                if (sidebarPosOption === 'right') {
                    $("body").addClass("page-sidebar-reversed");
                    $('#frontend-link').tooltip('destroy').tooltip({
                        placement: 'left'
                    });
                } else {
                    $("body").removeClass("page-sidebar-reversed");
                    $('#frontend-link').tooltip('destroy').tooltip({
                        placement: 'right'
                    });
                }
            }

            Layout.fixContentHeight(); // fix content height            
            Layout.initFixedSidebar(); // reinitialize fixed sidebar
        };

        // handle theme colors
        var setColor = function (color) {
            var color_ = (App.isRTL() ? color + '-rtl' : color);
            $('#style_color').attr("href", Layout.getLayoutCssPath() + 'themes/' + color_ + ".min.css");
        };

        $('.toggler', panel).click(function () {
            $('.toggler').hide();
            $('.toggler-close').show();
            $('.theme-panel > .theme-options').show();
        });

        $('.toggler-close', panel).click(function () {
            $('.toggler').show();
            $('.toggler-close').hide();
            $('.theme-panel > .theme-options').hide();
        });

        $('.theme-colors > ul > li', panel).click(function () {
            var color = $(this).attr("data-style");
            setColor(color);
            $('ul > li', panel).removeClass("current");
            $(this).addClass("current");
        });

        // set default theme options:

        if ($("body").hasClass("page-boxed")) {
            $('.layout-option', panel).val("boxed");
        }

        if ($("body").hasClass("page-sidebar-fixed")) {
            $('.sidebar-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-header-fixed")) {
            $('.page-header-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-footer-fixed")) {
            $('.page-footer-option', panel).val("fixed");
        }

        if ($("body").hasClass("page-sidebar-reversed")) {
            $('.sidebar-pos-option', panel).val("right");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-light")) {
            $('.sidebar-style-option', panel).val("light");
        }

        if ($(".page-sidebar-menu").hasClass("page-sidebar-menu-hover-submenu")) {
            $('.sidebar-menu-option', panel).val("hover");
        }        

        var sidebarOption = $('.sidebar-option', panel).val();
            var headerOption = $('.page-header-option', panel).val();
            var footerOption = $('.page-footer-option', panel).val();
            var sidebarPosOption = $('.sidebar-pos-option', panel).val();
            var sidebarStyleOption = $('.sidebar-style-option', panel).val();
            var sidebarMenuOption = $('.sidebar-menu-option', panel).val();

        $('.layout-option, .page-header-top-dropdown-style-option, .page-header-option, .sidebar-option, .page-footer-option, .sidebar-pos-option, .sidebar-style-option, .sidebar-menu-option', panel).change(setLayout);
    };

    // handle theme style
    var setThemeStyle = function(style) {
        var file = (style === 'rounded' ? 'components-rounded' : 'components');
        file = (App.isRTL() ? file + '-rtl' : file);

        $('#style_components').attr("href", App.getGlobalCssPath() + file + ".min.css");

        if (typeof Cookies !== "undefined") {
            Cookies.set('layout-style-option', style);
        }
    };

    return {

        //main function to initiate the theme
        init: function() {
            // handles style customer tool
            handleTheme(); 

            // handle layout style change
            $('.theme-panel .layout-style-option').change(function() {
                 setThemeStyle($(this).val());
            });

            // set layout style from cookie
            if (typeof Cookies !== "undefined" && Cookies.get('layout-style-option') === 'rounded') {
                setThemeStyle(Cookies.get('layout-style-option'));
                $('.theme-panel .layout-style-option').val(Cookies.get('layout-style-option'));
            }            
        }
    };

}();*/

//if (App.isAngularJsApp() === false) {
//    jQuery(document).ready(function() {    
//       Demo.init(); // init metronic core components
//    });
//}