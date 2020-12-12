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
    
      
      
    
      var element = document.getElementById("6638af03-70dc-4493-a474-a689b8f89119");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6638af03-70dc-4493-a474-a689b8f89119' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f37e855b-94e0-470f-b712-2a3b51f78579":{"roots":{"references":[{"attributes":{"toolbars":[{"id":"68379"}],"tools":[{"id":"68369"},{"id":"68370"},{"id":"68371"},{"id":"68372"},{"id":"68373"},{"id":"68374"},{"id":"68375"},{"id":"68376"}]},"id":"68407","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"68398"},"ticker":{"id":"68366"}},"id":"68365","type":"LinearAxis"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68393","type":"Span"},{"attributes":{"callback":null},"id":"68376","type":"HoverTool"},{"attributes":{},"id":"68400","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"68407"},"toolbar_location":"above"},"id":"68408","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68400"},"ticker":{"id":"68362"}},"id":"68361","type":"LinearAxis"},{"attributes":{},"id":"68359","type":"LinearScale"},{"attributes":{"source":{"id":"68388"}},"id":"68392","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68378","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"68377"}},"id":"68371","type":"BoxZoomTool"},{"attributes":{"text":"sigma"},"id":"68394","type":"Title"},{"attributes":{},"id":"68401","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68369"},{"id":"68370"},{"id":"68371"},{"id":"68372"},{"id":"68373"},{"id":"68374"},{"id":"68375"},{"id":"68376"}]},"id":"68379","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68401"},"selection_policy":{"id":"68402"}},"id":"68388","type":"ColumnDataSource"},{"attributes":{},"id":"68402","type":"UnionRenderers"},{"attributes":{},"id":"68374","type":"UndoTool"},{"attributes":{},"id":"68370","type":"PanTool"},{"attributes":{},"id":"68362","type":"BasicTicker"},{"attributes":{},"id":"68398","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"68352"},0,0]]},"id":"68406","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68389","type":"Circle"},{"attributes":{"axis":{"id":"68361"},"ticker":null},"id":"68364","type":"Grid"},{"attributes":{},"id":"68353","type":"DataRange1d"},{"attributes":{},"id":"68366","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68390","type":"Circle"},{"attributes":{"below":[{"id":"68361"}],"center":[{"id":"68364"},{"id":"68368"}],"left":[{"id":"68365"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68391"},{"id":"68393"}],"title":{"id":"68394"},"toolbar":{"id":"68379"},"toolbar_location":null,"x_range":{"id":"68353"},"x_scale":{"id":"68357"},"y_range":{"id":"68355"},"y_scale":{"id":"68359"}},"id":"68352","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"68378"}},"id":"68373","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68377","type":"BoxAnnotation"},{"attributes":{},"id":"68357","type":"LinearScale"},{"attributes":{},"id":"68369","type":"ResetTool"},{"attributes":{"children":[{"id":"68408"},{"id":"68406"}]},"id":"68409","type":"Column"},{"attributes":{"data_source":{"id":"68388"},"glyph":{"id":"68389"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68390"},"selection_glyph":null,"view":{"id":"68392"}},"id":"68391","type":"GlyphRenderer"},{"attributes":{},"id":"68375","type":"SaveTool"},{"attributes":{},"id":"68355","type":"DataRange1d"},{"attributes":{"axis":{"id":"68365"},"dimension":1,"ticker":null},"id":"68368","type":"Grid"},{"attributes":{},"id":"68372","type":"WheelZoomTool"}],"root_ids":["68409"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f37e855b-94e0-470f-b712-2a3b51f78579","root_ids":["68409"],"roots":{"68409":"6638af03-70dc-4493-a474-a689b8f89119"}}];
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