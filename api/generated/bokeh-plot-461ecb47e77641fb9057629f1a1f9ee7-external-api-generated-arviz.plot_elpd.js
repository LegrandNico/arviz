(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("4036c933-df1b-4441-885b-742c7841c779");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4036c933-df1b-4441-885b-742c7841c779' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"7d85bea4-31b1-4293-8217-41c028bdddb1":{"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"64942","type":"Cross"},{"attributes":{},"id":"64924","type":"PanTool"},{"attributes":{"callback":null},"id":"64930","type":"HoverTool"},{"attributes":{"axis":{"id":"64915"},"ticker":null},"id":"64918","type":"Grid"},{"attributes":{},"id":"64929","type":"SaveTool"},{"attributes":{"below":[{"id":"64915"}],"center":[{"id":"64918"},{"id":"64922"}],"left":[{"id":"64919"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"64944"}],"title":{"id":"64946"},"toolbar":{"id":"64933"},"toolbar_location":null,"x_range":{"id":"64907"},"x_scale":{"id":"64911"},"y_range":{"id":"64909"},"y_scale":{"id":"64913"}},"id":"64906","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"64928","type":"UndoTool"},{"attributes":{},"id":"64907","type":"DataRange1d"},{"attributes":{},"id":"64954","type":"UnionRenderers"},{"attributes":{"source":{"id":"64943"}},"id":"64945","type":"CDSView"},{"attributes":{},"id":"64952","type":"BasicTickFormatter"},{"attributes":{"text":"centered model - non centered model"},"id":"64946","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64931","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"64931"}},"id":"64925","type":"BoxZoomTool"},{"attributes":{"children":[[{"id":"64906"},0,0]]},"id":"64958","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64932","type":"PolyAnnotation"},{"attributes":{},"id":"64923","type":"ResetTool"},{"attributes":{},"id":"64953","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64923"},{"id":"64924"},{"id":"64925"},{"id":"64926"},{"id":"64927"},{"id":"64928"},{"id":"64929"},{"id":"64930"}]},"id":"64933","type":"Toolbar"},{"attributes":{},"id":"64920","type":"BasicTicker"},{"attributes":{},"id":"64911","type":"LinearScale"},{"attributes":{},"id":"64916","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"64950"},"ticker":{"id":"64920"}},"id":"64919","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"64959"},"toolbar_location":"above"},"id":"64960","type":"ToolbarBox"},{"attributes":{},"id":"64950","type":"BasicTickFormatter"},{"attributes":{},"id":"64926","type":"WheelZoomTool"},{"attributes":{},"id":"64909","type":"DataRange1d"},{"attributes":{"axis":{"id":"64919"},"dimension":1,"ticker":null},"id":"64922","type":"Grid"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"64953"},"selection_policy":{"id":"64954"}},"id":"64943","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"64960"},{"id":"64958"}]},"id":"64961","type":"Column"},{"attributes":{"formatter":{"id":"64952"},"ticker":{"id":"64916"}},"id":"64915","type":"LinearAxis"},{"attributes":{"overlay":{"id":"64932"}},"id":"64927","type":"LassoSelectTool"},{"attributes":{},"id":"64913","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"64933"}],"tools":[{"id":"64923"},{"id":"64924"},{"id":"64925"},{"id":"64926"},{"id":"64927"},{"id":"64928"},{"id":"64929"},{"id":"64930"}]},"id":"64959","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"64943"},"glyph":{"id":"64942"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"64945"}},"id":"64944","type":"GlyphRenderer"}],"root_ids":["64961"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"7d85bea4-31b1-4293-8217-41c028bdddb1","root_ids":["64961"],"roots":{"64961":"4036c933-df1b-4441-885b-742c7841c779"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();