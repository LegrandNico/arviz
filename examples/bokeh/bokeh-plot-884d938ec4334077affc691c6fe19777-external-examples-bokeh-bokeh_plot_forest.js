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
    
      
      
    
      var element = document.getElementById("bb5a09fa-301b-4ec2-a3fd-744e9dfbb153");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bb5a09fa-301b-4ec2-a3fd-744e9dfbb153' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a5c43a87-cfe9-4991-b8b3-e966866a3866":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68553","type":"Circle"},{"attributes":{},"id":"68632","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68616"},"selection_policy":{"id":"68617"}},"id":"68492","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68558","type":"Line"},{"attributes":{"data_source":{"id":"68552"},"glyph":{"id":"68553"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68554"},"selection_glyph":null,"view":{"id":"68556"}},"id":"68555","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"68470","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68549","type":"Line"},{"attributes":{},"id":"68614","type":"Selection"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68648"},"selection_policy":{"id":"68649"}},"id":"68572","type":"ColumnDataSource"},{"attributes":{},"id":"68611","type":"BasicTickFormatter"},{"attributes":{},"id":"68620","type":"Selection"},{"attributes":{},"id":"68616","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68644"},"selection_policy":{"id":"68645"}},"id":"68562","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"68658"},"selection_policy":{"id":"68659"}},"id":"68597","type":"ColumnDataSource"},{"attributes":{},"id":"68464","type":"PanTool"},{"attributes":{"source":{"id":"68572"}},"id":"68576","type":"CDSView"},{"attributes":{},"id":"68619","type":"UnionRenderers"},{"attributes":{"source":{"id":"68552"}},"id":"68556","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68594","type":"Line"},{"attributes":{},"id":"68625","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"68446"},0,0]]},"id":"68663","type":"GridBox"},{"attributes":{},"id":"68618","type":"Selection"},{"attributes":{"formatter":{"id":"68611"},"ticker":{"id":"68456"}},"id":"68455","type":"LinearAxis"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68588","type":"Line"},{"attributes":{},"id":"68622","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68579","type":"Line"},{"attributes":{},"id":"68613","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68656"},"selection_policy":{"id":"68657"}},"id":"68592","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68567"},"glyph":{"id":"68568"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68569"},"selection_glyph":null,"view":{"id":"68571"}},"id":"68570","type":"GlyphRenderer"},{"attributes":{},"id":"68468","type":"UndoTool"},{"attributes":{"data_source":{"id":"68492"},"glyph":{"id":"68493"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68494"},"selection_glyph":null,"view":{"id":"68496"}},"id":"68495","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"68455"},"ticker":null},"id":"68458","type":"Grid"},{"attributes":{},"id":"68615","type":"UnionRenderers"},{"attributes":{},"id":"68612","type":"Selection"},{"attributes":{"data_source":{"id":"68562"},"glyph":{"id":"68563"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68564"},"selection_glyph":null,"view":{"id":"68566"}},"id":"68565","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"68609"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68606"}},"id":"68459","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68574","type":"Line"},{"attributes":{"source":{"id":"68577"}},"id":"68581","type":"CDSView"},{"attributes":{},"id":"68621","type":"UnionRenderers"},{"attributes":{},"id":"68463","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68599","type":"Circle"},{"attributes":{"data_source":{"id":"68592"},"glyph":{"id":"68593"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68594"},"selection_glyph":null,"view":{"id":"68596"}},"id":"68595","type":"GlyphRenderer"},{"attributes":{},"id":"68453","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68554","type":"Circle"},{"attributes":{},"id":"68627","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68650"},"selection_policy":{"id":"68651"}},"id":"68577","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68582"},"glyph":{"id":"68583"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68584"},"selection_glyph":null,"view":{"id":"68586"}},"id":"68585","type":"GlyphRenderer"},{"attributes":{},"id":"68623","type":"UnionRenderers"},{"attributes":{},"id":"68628","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68589","type":"Line"},{"attributes":{"source":{"id":"68547"}},"id":"68551","type":"CDSView"},{"attributes":{},"id":"68633","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68472","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"68664"},"toolbar_location":"above"},"id":"68665","type":"ToolbarBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68471","type":"BoxAnnotation"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68548","type":"Line"},{"attributes":{},"id":"68626","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68494","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68652"},"selection_policy":{"id":"68653"}},"id":"68582","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68612"},"selection_policy":{"id":"68613"}},"id":"68482","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68563","type":"Line"},{"attributes":{"data_source":{"id":"68577"},"glyph":{"id":"68578"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68579"},"selection_glyph":null,"view":{"id":"68581"}},"id":"68580","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68618"},"selection_policy":{"id":"68619"}},"id":"68497","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"68459"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68462","type":"Grid"},{"attributes":{"source":{"id":"68582"}},"id":"68586","type":"CDSView"},{"attributes":{},"id":"68629","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"68646"},"selection_policy":{"id":"68647"}},"id":"68567","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68593","type":"Line"},{"attributes":{},"id":"68624","type":"Selection"},{"attributes":{"source":{"id":"68562"}},"id":"68566","type":"CDSView"},{"attributes":{"source":{"id":"68557"}},"id":"68561","type":"CDSView"},{"attributes":{"source":{"id":"68592"}},"id":"68596","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68598","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68463"},{"id":"68464"},{"id":"68465"},{"id":"68466"},{"id":"68467"},{"id":"68468"},{"id":"68469"},{"id":"68470"}]},"id":"68473","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68584","type":"Circle"},{"attributes":{},"id":"68456","type":"BasicTicker"},{"attributes":{"data_source":{"id":"68572"},"glyph":{"id":"68573"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68574"},"selection_glyph":null,"view":{"id":"68576"}},"id":"68575","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68587"}},"id":"68591","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68564","type":"Line"},{"attributes":{},"id":"68630","type":"Selection"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68654"},"selection_policy":{"id":"68655"}},"id":"68587","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68578","type":"Line"},{"attributes":{},"id":"68617","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68569","type":"Circle"},{"attributes":{"data_source":{"id":"68587"},"glyph":{"id":"68588"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68589"},"selection_glyph":null,"view":{"id":"68591"}},"id":"68590","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68583","type":"Circle"},{"attributes":{"data_source":{"id":"68597"},"glyph":{"id":"68598"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68599"},"selection_glyph":null,"view":{"id":"68601"}},"id":"68600","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68559","type":"Line"},{"attributes":{"source":{"id":"68567"}},"id":"68571","type":"CDSView"},{"attributes":{},"id":"68469","type":"SaveTool"},{"attributes":{"data":{},"selected":{"id":"68640"},"selection_policy":{"id":"68641"}},"id":"68552","type":"ColumnDataSource"},{"attributes":{},"id":"68631","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"68471"}},"id":"68465","type":"BoxZoomTool"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68573","type":"Line"},{"attributes":{},"id":"68466","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68568","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68493","type":"Circle"},{"attributes":{"data_source":{"id":"68542"},"glyph":{"id":"68543"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68544"},"selection_glyph":null,"view":{"id":"68546"}},"id":"68545","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68509","type":"Circle"},{"attributes":{"text":"94.0% HDI"},"id":"68602","type":"Title"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68508","type":"Circle"},{"attributes":{"overlay":{"id":"68472"}},"id":"68467","type":"LassoSelectTool"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68620"},"selection_policy":{"id":"68621"}},"id":"68502","type":"ColumnDataSource"},{"attributes":{},"id":"68655","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68624"},"selection_policy":{"id":"68625"}},"id":"68512","type":"ColumnDataSource"},{"attributes":{},"id":"68639","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68557"},"glyph":{"id":"68558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68559"},"selection_glyph":null,"view":{"id":"68561"}},"id":"68560","type":"GlyphRenderer"},{"attributes":{},"id":"68657","type":"UnionRenderers"},{"attributes":{"source":{"id":"68517"}},"id":"68521","type":"CDSView"},{"attributes":{},"id":"68653","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68499","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68518","type":"Line"},{"attributes":{},"id":"68641","type":"UnionRenderers"},{"attributes":{},"id":"68648","type":"Selection"},{"attributes":{},"id":"68635","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68484","type":"Line"},{"attributes":{},"id":"68659","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68605","type":"DataRange1d"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68514","type":"Line"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68606","type":"FixedTicker"},{"attributes":{"below":[{"id":"68455"}],"center":[{"id":"68458"},{"id":"68462"}],"left":[{"id":"68459"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68485"},{"id":"68490"},{"id":"68495"},{"id":"68500"},{"id":"68505"},{"id":"68510"},{"id":"68515"},{"id":"68520"},{"id":"68525"},{"id":"68530"},{"id":"68535"},{"id":"68540"},{"id":"68545"},{"id":"68550"},{"id":"68555"},{"id":"68560"},{"id":"68565"},{"id":"68570"},{"id":"68575"},{"id":"68580"},{"id":"68585"},{"id":"68590"},{"id":"68595"},{"id":"68600"}],"title":{"id":"68602"},"toolbar":{"id":"68473"},"toolbar_location":null,"x_range":{"id":"68604"},"x_scale":{"id":"68451"},"y_range":{"id":"68605"},"y_scale":{"id":"68453"}},"id":"68446","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68539","type":"Circle"},{"attributes":{"data_source":{"id":"68482"},"glyph":{"id":"68483"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68484"},"selection_glyph":null,"view":{"id":"68486"}},"id":"68485","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68488","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68519","type":"Line"},{"attributes":{},"id":"68651","type":"UnionRenderers"},{"attributes":{"children":[{"id":"68665"},{"id":"68663"}]},"id":"68666","type":"Column"},{"attributes":{"source":{"id":"68532"}},"id":"68536","type":"CDSView"},{"attributes":{"data_source":{"id":"68537"},"glyph":{"id":"68538"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68539"},"selection_glyph":null,"view":{"id":"68541"}},"id":"68540","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"68628"},"selection_policy":{"id":"68629"}},"id":"68522","type":"ColumnDataSource"},{"attributes":{},"id":"68647","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68489","type":"Line"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68630"},"selection_policy":{"id":"68631"}},"id":"68527","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68528","type":"Line"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68642"},"selection_policy":{"id":"68643"}},"id":"68557","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68547"},"glyph":{"id":"68548"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68549"},"selection_glyph":null,"view":{"id":"68551"}},"id":"68550","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68507"},"glyph":{"id":"68508"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68509"},"selection_glyph":null,"view":{"id":"68511"}},"id":"68510","type":"GlyphRenderer"},{"attributes":{},"id":"68634","type":"Selection"},{"attributes":{},"id":"68649","type":"UnionRenderers"},{"attributes":{"source":{"id":"68512"}},"id":"68516","type":"CDSView"},{"attributes":{"data_source":{"id":"68497"},"glyph":{"id":"68498"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68499"},"selection_glyph":null,"view":{"id":"68501"}},"id":"68500","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68632"},"selection_policy":{"id":"68633"}},"id":"68532","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68543","type":"Line"},{"attributes":{"source":{"id":"68527"}},"id":"68531","type":"CDSView"},{"attributes":{"source":{"id":"68537"}},"id":"68541","type":"CDSView"},{"attributes":{"data_source":{"id":"68532"},"glyph":{"id":"68533"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68534"},"selection_glyph":null,"view":{"id":"68536"}},"id":"68535","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68597"}},"id":"68601","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68533","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68524","type":"Circle"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68638"},"selection_policy":{"id":"68639"}},"id":"68547","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68544","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68538","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68622"},"selection_policy":{"id":"68623"}},"id":"68507","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68517"},"glyph":{"id":"68518"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68519"},"selection_glyph":null,"view":{"id":"68521"}},"id":"68520","type":"GlyphRenderer"},{"attributes":{},"id":"68640","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68634"},"selection_policy":{"id":"68635"}},"id":"68537","type":"ColumnDataSource"},{"attributes":{},"id":"68644","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68523","type":"Circle"},{"attributes":{},"id":"68636","type":"Selection"},{"attributes":{"source":{"id":"68542"}},"id":"68546","type":"CDSView"},{"attributes":{},"id":"68451","type":"LinearScale"},{"attributes":{"source":{"id":"68487"}},"id":"68491","type":"CDSView"},{"attributes":{"source":{"id":"68497"}},"id":"68501","type":"CDSView"},{"attributes":{},"id":"68650","type":"Selection"},{"attributes":{},"id":"68652","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68534","type":"Line"},{"attributes":{},"id":"68656","type":"Selection"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68604","type":"DataRange1d"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68498","type":"Line"},{"attributes":{"source":{"id":"68482"}},"id":"68486","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68529","type":"Line"},{"attributes":{},"id":"68637","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68512"},"glyph":{"id":"68513"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68514"},"selection_glyph":null,"view":{"id":"68516"}},"id":"68515","type":"GlyphRenderer"},{"attributes":{},"id":"68638","type":"Selection"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68614"},"selection_policy":{"id":"68615"}},"id":"68487","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68522"}},"id":"68526","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68504","type":"Line"},{"attributes":{"source":{"id":"68502"}},"id":"68506","type":"CDSView"},{"attributes":{},"id":"68645","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68636"},"selection_policy":{"id":"68637"}},"id":"68542","type":"ColumnDataSource"},{"attributes":{},"id":"68643","type":"UnionRenderers"},{"attributes":{},"id":"68609","type":"BasicTickFormatter"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68483","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68503","type":"Line"},{"attributes":{},"id":"68642","type":"Selection"},{"attributes":{"data_source":{"id":"68487"},"glyph":{"id":"68488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68489"},"selection_glyph":null,"view":{"id":"68491"}},"id":"68490","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68522"},"glyph":{"id":"68523"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68524"},"selection_glyph":null,"view":{"id":"68526"}},"id":"68525","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68527"},"glyph":{"id":"68528"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68529"},"selection_glyph":null,"view":{"id":"68531"}},"id":"68530","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68492"}},"id":"68496","type":"CDSView"},{"attributes":{},"id":"68646","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68513","type":"Line"},{"attributes":{"data_source":{"id":"68502"},"glyph":{"id":"68503"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68504"},"selection_glyph":null,"view":{"id":"68506"}},"id":"68505","type":"GlyphRenderer"},{"attributes":{},"id":"68658","type":"Selection"},{"attributes":{},"id":"68654","type":"Selection"},{"attributes":{"toolbars":[{"id":"68473"}],"tools":[{"id":"68463"},{"id":"68464"},{"id":"68465"},{"id":"68466"},{"id":"68467"},{"id":"68468"},{"id":"68469"},{"id":"68470"}]},"id":"68664","type":"ProxyToolbar"},{"attributes":{"source":{"id":"68507"}},"id":"68511","type":"CDSView"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68626"},"selection_policy":{"id":"68627"}},"id":"68517","type":"ColumnDataSource"}],"root_ids":["68666"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a5c43a87-cfe9-4991-b8b3-e966866a3866","root_ids":["68666"],"roots":{"68666":"bb5a09fa-301b-4ec2-a3fd-744e9dfbb153"}}];
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