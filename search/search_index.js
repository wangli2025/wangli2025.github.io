var __index = {"config":{"lang":["en"],"separator":"[\\s\\u200b\\u3000\\-\u3001\u3002\uff0c\uff0e\uff1f\uff01\uff1b]+","pipeline":["stemmer"]},"docs":[{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html","title":"\u4f7f\u7528mkdocs\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u535a\u5ba2\u7cfb\u7edf","text":""},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_1","title":"\u524d\u8a00","text":"<p>\u6bcf\u4e2a\u505a\u6280\u672f\u7684\u90fd\u5e0c\u671b\u6709\u4e00\u4e2a\u5c5e\u4e8e\u4e2a\u4eba\u7684\u5c0f\u7ad9\u70b9\uff0c\u4e0d\u7ba1\u662f\u5199\u4e00\u4e9b\u968f\u7b14\uff0c\u8fd8\u662f\u8bb0\u5f55\u6280\u672f\u603b\u7ed3\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u5f04\u5f97\u5f88\u590d\u6742\u3002\u8fd9\u7bc7\u6587\u7ae0\u4e5f\u8bb8\u4f1a\u5e2e\u5230\u4f60\u3002</p> <p>\u672c\u535a\u5ba2\u4f7f\u7528\u7684\u6280\u672f\u6808\u4e3a<code>mkdocs</code> + <code>material</code> \u4e3b\u9898\uff0c\u914d\u5408 <code>giscus</code> \u8bc4\u8bba\u7cfb\u7edf\u642d\u914d\u800c\u6210\uff0c\u542c\u8d77\u6765\u662f\u4e0d\u662f\u611f\u89c9\u975e\u5e38\u590d\u6742\uff0c\u653e\u5fc3\uff0c\u53ea\u4f1a\u6d89\u53ca\u4e00\u4e9b\u7b80\u5355\u7684\u547d\u4ee4\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#mkdocs_1","title":"\u5b89\u88c5<code>mkdocs</code>","text":"<p>\u9996\u5148\u662f\u5b89\u88c5<code>mkdocs</code> \uff0c\u5b83\u662f<code>python</code> \u7f16\u5199\u7684\u4e00\u4e2a\u57fa\u4e8e<code>Markdown</code> \u6587\u6863\u7684\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u3002</p> <p>\u4f7f\u7528<code>pip</code> \u8fdb\u884c\u5b89\u88c5\u5373\u53ef</p> <pre><code># pip3 install mkdocs\n</code></pre> <p>\u9996\u5148\u9700\u8981\u5b89\u88c5<code>python</code> \uff1a  https://www.python.org/</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_2","title":"\u521b\u5efa\u65b0\u9879\u76ee","text":"<p>\u4f7f\u7528<code>mkdocs new new-project</code> \uff0c\u5373\u53ef\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684<code>new-project</code> \u9879\u76ee \u3002</p> <pre><code># mkdocs new new-project\nINFO    -  Creating project directory: new-project\nINFO    -  Writing config file: new-project/mkdocs.yml\nINFO    -  Writing initial docs: new-project/docs/index.md\n#\n</code></pre> <p>\u521b\u5efa<code>new-project</code> \u65b0\u9879\u76ee\u540e\uff0c\u76ee\u5f55\u683c\u5f0f\u5982\u4e0b\uff1a</p> <pre><code># tree new-project/\nnew-project/\n\u251c\u2500\u2500 docs\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 index.md\n\u2514\u2500\u2500 mkdocs.yml\n\n1 directory, 2 files\n#\n</code></pre> <p>\u5176\u4e2d</p> <ul> <li><code>mkdocs.yml</code> \uff1a\u4e3b\u914d\u7f6e\u6587\u4ef6</li> <li><code>docs</code>\uff1a\u9759\u6001\u6587\u6863\u76ee\u5f55</li> </ul>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_3","title":"\u5b9e\u65f6\u9884\u89c8","text":"<p><code>mkdocs</code> \u63d0\u4f9b\u4e86\u5185\u7f6e<code>web</code> \u670d\u52a1\u5668\uff0c\u4ee5\u4fbf\u5728\u7f16\u5199\u6587\u6863\u7684\u65f6\u5019\u53ef\u4ee5\u5b9e\u65f6\u6d4f\u89c8\u6587\u6863\uff0c\u5728\u65b0\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u542f\u52a8\u8be5<code>web</code> \u670d\u52a1\u5668\uff1a</p> <pre><code>$ cd new-project/\n$ mkdocs serve\nINFO    -  Building documentation...\nINFO    -  Cleaning site directory\nINFO    -  Documentation built in 0.14 seconds\nINFO    -  [15:14:07] Watching paths for changes: 'docs', 'mkdocs.yml'\nINFO    -  [15:14:07] Serving on http://127.0.0.1:8000/\n</code></pre> <p>\u6b64\u65f6\u82e5\u6253\u5f00\u8be5\u7f51\u9875\uff0c\u4f1a\u770b\u5230\u9ed8\u8ba4\u7684\u4e3b\u9875\uff1a</p> <p></p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_4","title":"\u751f\u6210\u7f51\u9875\u6587\u4ef6","text":"<p>\u82e5\u6587\u6863\u7f16\u5199\u5b8c\u540e\uff0c\u60f3\u8981\u90e8\u7f72\u5230\u9759\u6001\u670d\u52a1\u5668\u4e0a\uff0c\u53ef\u4ee5\u5c06\u5176\u751f\u6210\u9759\u6001\u7ad9\u70b9\uff0c\u800c\u540e\u90e8\u7f72\u5230\u9759\u6001\u670d\u52a1\u5668\u5373\u53ef\uff0c\u4f8b\u5982\uff1a</p> <pre><code># cd ..\n# cd new-project/\n# mkdocs build\nINFO    -  Cleaning site directory\nINFO    -  Building documentation to directory: /mnt/j/new-project/site\nINFO    -  Documentation built in 0.09 seconds\n#\n</code></pre> <p>\u6b64\u65f6\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u751f\u6210<code>site</code> \u76ee\u5f55\uff0c\u800c\u8be5\u5728\u76ee\u5f55\u4e0b\uff0c\u662f\u751f\u6210\u4e00\u7cfb\u5217\u7684\u9759\u6001\u6587\u4ef6\u3002</p> <pre><code># tree site\nsite\n\u251c\u2500\u2500 404.html\n\u251c\u2500\u2500 css\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 base.css\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 bootstrap.min.css\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 bootstrap.min.css.map\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 brands.min.css\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 fontawesome.min.css\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 solid.min.css\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 v4-font-face.min.css\n\u251c\u2500\u2500 img\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 favicon.ico\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 grid.png\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 js\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 base.js\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 bootstrap.bundle.min.js\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 bootstrap.bundle.min.js.map\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 darkmode.js\n\u251c\u2500\u2500 search\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 lunr.js\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 main.js\n\u2502\u00a0\u00a0 \u251c\u2500\u2500 search_index.json\n\u2502\u00a0\u00a0 \u2514\u2500\u2500 worker.js\n\u251c\u2500\u2500 sitemap.xml\n\u251c\u2500\u2500 sitemap.xml.gz\n\u2514\u2500\u2500 webfonts\n    \u251c\u2500\u2500 fa-brands-400.ttf\n    \u251c\u2500\u2500 fa-brands-400.woff2\n    \u251c\u2500\u2500 fa-regular-400.ttf\n    \u251c\u2500\u2500 fa-regular-400.woff2\n    \u251c\u2500\u2500 fa-solid-900.ttf\n    \u251c\u2500\u2500 fa-solid-900.woff2\n    \u251c\u2500\u2500 fa-v4compatibility.ttf\n    \u2514\u2500\u2500 fa-v4compatibility.woff2\n\n5 directories, 29 files\n#\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#blog","title":"\u914d\u7f6eblog\u4e3b\u9898","text":"<p><code>mkdocs-material</code> \u662f<code>mkdocs</code> \u4f7f\u7528\u6700\u591a\u7684\u7b2c\u4e09\u65b9\u4e3b\u9898\uff0c\u5176\u5185\u7f6e\u4e86<code>blog</code> \u63d2\u4ef6\u53ef\u4f9b\u76f4\u63a5\u8c03\u7528\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#mkdocs-material","title":"\u5b89\u88c5<code>mkdocs-material</code>","text":"<p>\u4f7f\u7528<code>pip</code> \u5373\u53ef\u5b89\u88c5\u8be5\u4e3b\u9898</p> <pre><code># pip3 install mkdocs-material\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#blog_1","title":"\u521b\u5efablog\u5fc5\u8981\u7684\u76ee\u5f55","text":"<p>\u4f7f\u7528<code>mkdocs-material</code>\u7684\u535a\u5ba2\u63d2\u4ef6\uff0c\u9700\u8981\u65b0\u5efa<code>docs/posts</code> \u76ee\u5f55\uff0c\u4ee5\u4fbf\u63d2\u4ef6\u80fd\u591f\u626b\u63cf\u8be5\u76ee\u5f55\u4e0b\u6240\u6709\u7684<code>Markdown</code> \u6587\u4ef6\u3002</p> <pre><code># cd ..\n# cd new-project/\n# mkdir -p docs/posts/\n# tree docs/\ndocs/\n\u251c\u2500\u2500 index.md\n\u2514\u2500\u2500 posts\n\n1 directory, 1 file\n#\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#mkdocsyml","title":"\u914d\u7f6emkdocs.yml","text":"<p>\u8be5\u914d\u7f6e\u6587\u4ef6\u9ed8\u8ba4\u53ea\u6709\u4e00\u9879\u914d\u7f6e\uff1a<code>site_name</code>\uff0c\u4e5f\u662f\u552f\u4e00\u5fc5\u987b\u8981\u6709\u7684\u4e00\u9879\u3002</p> <pre><code># cat mkdocs.yml\nsite_name: My Docs\n#\n</code></pre> <p>\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u65b0\u589e<code>theme</code> \u548c<code>plugins</code> \u914d\u7f6e\u4e3a<code>blog</code> \u7c7b\u578b</p> <p>\u914d\u7f6e\u5982\u4e0b</p> <pre><code># cat mkdocs.yml\nsite_name: My Blog\n\ntheme:\n  name: material\n\nplugins:\n  - blog:\n      blog_dir: .\n#\n</code></pre> <p>\u4e0a\u8ff0\u5185\u5bb9\u662f\u4e00\u4e2a\u6700\u57fa\u672c\u7684<code>blog</code> \u914d\u7f6e\uff0c\u542b\u4e49\u662f<code>mkdocs</code> \u4f7f\u7528\u4e86<code>mkdocs-material</code> \u4e3b\u9898\uff0c\u5e76\u4e14\u542f\u7528\u4e86<code>blog</code>\u63d2\u4ef6\uff0c<code>blog</code> \u7684\u6839\u76ee\u5f55\u4e3a\u5f53\u524d\u76ee\u5f55\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_5","title":"\u7f16\u5199\u7b2c\u4e00\u7bc7\u535a\u5ba2","text":"<p>\u5173\u4e8e\u66f4\u591a\u7684\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003\uff1a mkdocs-material-setting-up-a-blog</p> <p>\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9700\u8981\u5148\u6e05\u7406\u6389<code>docs/index.md</code> \u7684\u5185\u5bb9\uff0c\u4ee5\u514d\u9020\u6210\u5e72\u6270\u3002</p> <pre><code># &gt; docs/index.md\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_6","title":"\u65b0\u589e\u7b2c\u4e00\u7bc7\u535a\u5ba2","text":"<p>\u5728<code>/docs/posts/</code> \u4e2d\u53ef\u4ee5\u7f16\u5199\u7b2c\u4e00\u7bc7\u6587\u6863\u4e86\u3002</p> <pre><code># cat &gt;&gt; docs/posts/hello_mkdocs.md &lt;&lt; EOF\n&gt; ---\n&gt; date: 2024-10-18\n&gt; categories:\n&gt;   - hello\n&gt; draft: false\n&gt; ---\n&gt;\n&gt; # Hello Mkdocs\n&gt;\n&gt; \u8fd9\u662f\u7f16\u5199\u7684\u7b2c\u4e00\u7bc7\u6587\u6863\n&gt;\n&gt; &lt;!-- more --&gt;\n&gt;\n&gt; \u6b63\u6587\u5f00\u59cb...\n&gt; EOF\n#\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_7","title":"\u535a\u5ba2\u5143\u6570\u636e","text":"<p>\u6587\u6863\u7684\u5185\u5bb9\u5982\u4e0b\uff1a</p> <pre><code># cat docs/posts/hello_mkdocs.md\n---\ndate: 2024-10-18\ncategories:\n  - hello\ndraft: false\n---\n\n# Hello Mkdocs\n\n\u8fd9\u662f\u7f16\u5199\u7684\u7b2c\u4e00\u7bc7\u6587\u6863\n\n&lt;!-- more --&gt;\n\n\u6b63\u6587\u5f00\u59cb...\n#\n</code></pre> <p>\u5176\u4e2d<code>---</code> \u5305\u542b\u7684\u662f\u535a\u5ba2\u7684\u5143\u4fe1\u606f</p> <pre><code>---\ndate: 2024-10-18\ncategories:\n  - hello\ndraft: false\n---\n</code></pre> <ul> <li><code>date</code>\uff1a \u6587\u6863\u7684\u65e5\u671f</li> <li><code>categories</code>\uff1a \u6587\u6863\u7684\u5206\u7c7b</li> <li><code>draft</code>\uff1a \u662f\u5426\u662f\u8349\u7a3f</li> </ul> <p>\u63a5\u4e0b\u6765\u4fbf\u662f\u6458\u8981</p> <pre><code># Hello Mkdocs\n\n\u8fd9\u662f\u7f16\u5199\u7684\u7b2c\u4e00\u7bc7\u6587\u6863\n\n&lt;!-- more --&gt;\n</code></pre> <p><code>&lt;!-- more --&gt;</code> \u6807\u7b7e\u4e4b\u4e0a\u7684\u5185\u5bb9\uff0c\u4fbf\u662f\u6458\u8981\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_8","title":"\u5b9e\u9645\u6548\u679c\u5c55\u793a","text":"<p>\u5b8c\u6210\u540e\uff0c\u4fbf\u53ef\u4ee5\u4f7f\u7528<code>mkdocs serve</code> \u67e5\u770b\u5b9e\u9645\u7684\u6548\u679c\u4e86\u3002</p> <p></p> <p></p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#giscus","title":"\u65b0\u589egiscus\u8bc4\u8bba\u7cfb\u7edf","text":"<p><code>giscus</code> \u662f<code>github</code>\u7684\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u7531<code>GitHub Discussions</code>\u63d0\u4f9b\u652f\u6301\u7684\u8bc4\u8bba\u7cfb\u7edf\u3002</p> <p>\u7531\u4e8e\u662f\u57fa\u4e8e<code>github</code> \u7684\uff0c\u6240\u4ee5\u9700\u8981\u5148\u5728\u7f51\u9875\u4e0a\u767b\u5f55<code>github</code> \u624d\u80fd\u8fdb\u884c\u540e\u7eed\u7684\u64cd\u4f5c\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#giscus_1","title":"\u5b89\u88c5giscus","text":"<p>\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00https://github.com/apps/giscus\u6253\u5f00\u8be5\u9875\u9762\uff0c\u9009\u62e9<code>Install</code> \u8fdb\u884c\u5b89\u88c5</p> <p></p> <p>\u70b9\u51fb\u5b89\u88c5\u540e\uff0c\u4f1a\u63d0\u793a\u5bf9\u4e8e\u54ea\u4e9b\u5b58\u50a8\u5e93\u6709\u6743\u9650\uff0c\u7531\u4e8e\u662f\u7ed9<code>mkdocs</code> \u4f7f\u7528\uff0c\u6240\u4ee5\u7ed9\u5b9a\u4e00\u4e2a\u9884\u5148\u521b\u5efa\u597d\u7684\u4ed3\u5e93\u5373\u53ef\u3002</p> <p>\u6700\u540e\u70b9\u51fb<code>Install</code> \u5373\u53ef\u5b89\u88c5\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#giscus_2","title":"\u751f\u6210giscus\u914d\u7f6e\u6587\u4ef6","text":"<p>\u6253\u5f00https://giscus.app/zh-CN\u5373\u53ef\u914d\u7f6e\u8be5<code>giscus</code> \uff0c\u8f93\u5165\u4ed3\u5e93\u4fe1\u606f\uff0c\u9009\u62e9\u6620\u5c04\u5173\u7cfb\uff0c\u5373\u53ef\u751f\u6210\u914d\u7f6e\u6587\u4ef6\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#giscusmkdocs","title":"\u5c06giscus\u96c6\u6210\u5230mkdocs\u4e0a","text":"<p>\u8986\u76d6\u539f\u59cb<code>comments.html</code> \u6587\u4ef6\uff0c\u65b0\u5efa<code>overrides/partials/comments.html</code> \u6587\u4ef6\u3002</p> <pre><code># cd ..\n# cd new-project/\n# mkdir -p overrides/partials/\n#\n# touch  overrides/partials/comments.html\n#\n</code></pre> <p>\u7f16\u8f91<code>comments.html</code> \u6587\u4ef6\uff0c\u9996\u5148\u952e\u5165\u6a21\u7248\u5185\u5bb9\uff1a</p> <pre><code># cat overrides/partials/comments.html\n{% if page.meta.comments %}\n  &lt;h2 id=\"__comments\"&gt;{{ lang.t(\"meta.comments\") }}&lt;/h2&gt;\n  &lt;!-- Insert generated snippet here --&gt;\n\n  &lt;!-- Synchronize Giscus theme with palette --&gt;\n  &lt;script&gt;\n    var giscus = document.querySelector(\"script[src*=giscus]\")\n\n    // Set palette on initial load\n    var palette = __md_get(\"__palette\")\n    if (palette &amp;&amp; typeof palette.color === \"object\") {\n      var theme = palette.color.scheme === \"slate\"\n        ? \"transparent_dark\"\n        : \"light\"\n\n      // Instruct Giscus to set theme\n      giscus.setAttribute(\"data-theme\", theme)\n    }\n\n    // Register event handlers after documented loaded\n    document.addEventListener(\"DOMContentLoaded\", function() {\n      var ref = document.querySelector(\"[data-md-component=palette]\")\n      ref.addEventListener(\"change\", function() {\n        var palette = __md_get(\"__palette\")\n        if (palette &amp;&amp; typeof palette.color === \"object\") {\n          var theme = palette.color.scheme === \"slate\"\n            ? \"transparent_dark\"\n            : \"light\"\n\n          // Instruct Giscus to change theme\n          var frame = document.querySelector(\".giscus-frame\")\n          frame.contentWindow.postMessage(\n            { giscus: { setConfig: { theme } } },\n            \"https://giscus.app\"\n          )\n        }\n      })\n    })\n  &lt;/script&gt;\n{% endif %}\n#\n</code></pre> <p>\u63a5\u7740\u5c06\u4e0a\u8ff0\u751f\u6210\u7684<code>giscus</code> \u914d\u7f6e\u6587\u4ef6\uff0c\u7f16\u8f91\u5230\u4e0a\u8ff0<code>comments.html</code>\u6587\u4ef6\u4e2d\u7684<code>&lt;!-- Insert generated snippet here --&gt;</code> \u548c<code>&lt;!-- Synchronize Giscus theme with palette --&gt;</code> \u4e4b\u95f4\u3002</p> <p>\u5b8c\u6574\u7684\u5185\u5bb9\u4e3a\uff1a</p> <pre><code># cat overrides/partials/comments.html\n{% if page.meta.comments %}\n  &lt;h2 id=\"__comments\"&gt;{{ lang.t(\"meta.comments\") }}&lt;/h2&gt;\n  &lt;!-- Insert generated snippet here --&gt;\n\n&lt;!-- giscus.app/client.js \u76f8\u5173\u4ee3\u7801 --&gt;\n\n  &lt;!-- Synchronize Giscus theme with palette --&gt;\n  &lt;script&gt;\n    var giscus = document.querySelector(\"script[src*=giscus]\")\n\n    // Set palette on initial load\n    var palette = __md_get(\"__palette\")\n    if (palette &amp;&amp; typeof palette.color === \"object\") {\n      var theme = palette.color.scheme === \"slate\"\n        ? \"transparent_dark\"\n        : \"light\"\n\n      // Instruct Giscus to set theme\n      giscus.setAttribute(\"data-theme\", theme)\n    }\n\n    // Register event handlers after documented loaded\n    document.addEventListener(\"DOMContentLoaded\", function() {\n      var ref = document.querySelector(\"[data-md-component=palette]\")\n      ref.addEventListener(\"change\", function() {\n        var palette = __md_get(\"__palette\")\n        if (palette &amp;&amp; typeof palette.color === \"object\") {\n          var theme = palette.color.scheme === \"slate\"\n            ? \"transparent_dark\"\n            : \"light\"\n\n          // Instruct Giscus to change theme\n          var frame = document.querySelector(\".giscus-frame\")\n          frame.contentWindow.postMessage(\n            { giscus: { setConfig: { theme } } },\n            \"https://giscus.app\"\n          )\n        }\n      })\n    })\n  &lt;/script&gt;\n{% endif %}\n#\n</code></pre> <p>\u540c\u65f6\uff0c\u8fd8\u9700\u8981\u4fee\u6539<code>mkdocs.yml</code> \u5728<code>theme</code> \u4e2d\u65b0\u589e<code>custom_dir</code> \u53c2\u6570\uff0c\u5b8c\u6574\u7684\u914d\u7f6e\u53c2\u6570\u4e3a\uff1a</p> <pre><code># cat mkdocs.yml\nsite_name: My Blog\ntheme:\n  name: material\n  custom_dir: 'overrides'\n\nplugins:\n  - blog:\n      blog_dir: .\n#\n</code></pre> <p><code>custom_dir</code> \u53c2\u6570\u7684\u4f5c\u7528\u662f\u8986\u76d6\u539f\u59cb\u6a21\u7248\u6587\u4ef6\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_9","title":"\u4e3a\u535a\u6587\u5f00\u542f\u8bc4\u8bba\u6846","text":"<p>\u8fd8\u8bb0\u5f97\u521b\u5efa<code>hello_mkdocs.md</code> \u7684\u5143\u4fe1\u606f\u5417\uff1f</p> <pre><code># head docs/posts/hello_mkdocs.md\n---\ndate: 2024-10-18\ncategories:\n  - hello\ndraft: false\n---\n\n# Hello Mkdocs\n\n\u8fd9\u662f\u7f16\u5199\u7684\u7b2c\u4e00\u7bc7\u6587\u6863\n#\n</code></pre> <p>\u4ec5\u9700\u8981\u5728\u5143\u4fe1\u606f\u4e0a\u6dfb\u52a0<code>comments: true</code> \u5373\u53ef\uff0c\u65b0\u589e\u8bc4\u8bba\u6846\u3002</p> <p>\u4fee\u6539\u540e\u7684\u6587\u4ef6\u4e3a\uff1a</p> <pre><code># head docs/posts/hello_mkdocs.md\n---\ndate: 2024-10-18\ncategories:\n  - hello\ndraft: false\ncomments: true\n---\n\n# Hello Mkdocs\n\n#\n</code></pre> <p>\u6253\u5f00\u7f51\u9875\uff0c\u4fbf\u53ef\u4ee5\u8fdb\u884c\u8bc4\u8bba\u4e86\u3002</p> <p></p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#rss","title":"\u5f00\u542fRSS","text":"<p>\u5173\u4e8e<code>RSS</code>\u7684\u6587\u6863\uff0c\u53c2\u8003\u5982\u4e0b\uff1a https://squidfunk.github.io/mkdocs-material/setup/setting-up-a-blog/#rss</p> <p><code>RSS</code> \u5bf9\u4e8e\u535a\u5ba2\u800c\u8a00\uff0c\u975e\u5e38\u91cd\u8981\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7528\u6237\u8ba2\u9605\u7f51\u7ad9<code>RSS feed</code>\uff0c\u63a5\u4e0b\u6765\u4fbf\u4ecb\u7ecd\u5982\u4f55\u5f00\u542f<code>RSS</code> \u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_10","title":"\u5b89\u88c5\u63d2\u4ef6","text":"<pre><code># pip3 install mkdocs-rss-plugin\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#rss_1","title":"\u914d\u7f6eRSS","text":"<p>\u5728<code>mkdocs.yml</code>\u4e2d\u65b0\u589e\u5173\u4e8e<code>RSS</code> \u4fe1\u606f\u7684\u53c2\u6570\u3002</p> <pre><code>plugins:\n  - blog:\n      blog_dir: .\n  - rss:\n      match_path: /*\n      categories:\n        - categories\n        - tags\n      use_git: false\n</code></pre> <p>\u5176\u53c2\u6570\u7684\u4f5c\u7528\u4e3a\u5f00\u542f<code>rss</code> \u3002</p> <ul> <li><code>match_path:</code>\uff1a \u5339\u914d \u6307\u5b9a \u76ee\u5f55\u4e0b\u7684\u6587\u6863\u3002</li> <li><code>categories</code> \uff1a <code>feed</code> \u7c7b\u522b\u3002</li> <li><code>use_git</code>:  \u7981\u7528<code>git</code> \u3002</li> </ul> <p>\u5176\u5b8c\u6574\u53c2\u6570\u4e3a\uff1a</p> <pre><code># cat mkdocs.yml\nsite_name: My Blog\ntheme:\n  name: material\n  custom_dir: 'overrides'\n\nplugins:\n  - blog:\n      blog_dir: .\n  - rss:\n      match_path: /*\n      categories:\n        - categories\n        - tags\n      use_git: false\n#\n</code></pre>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_11","title":"\u6548\u679c\u5c55\u793a","text":"<p>\u5b8c\u6210\u540e\uff0c\u4fbf\u53ef\u4ee5\u4f7f\u7528<code>mkdocs serve</code> \u67e5\u770b\u5b9e\u9645\u7684\u6548\u679c\u4e86\u3002</p> <p>\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165127.0.0.1:8001/feed_rss_created.xml\u4fbf\u53ef\u4ee5\u67e5\u770b\u8be5\u7ad9\u70b9\u7684<code>RSS</code>\u4fe1\u606f\u4e86\u3002</p> <p></p> <p>\u5982\u4e0a\uff0c\u5219\u8bc1\u660e\u8be5<code>RSS</code> \u914d\u7f6e\u6210\u529f\u3002</p>"},{"location":"2024/10/18/Create-a-simple-blog-system-using-mkdocs.html#_12","title":"\u603b\u7ed3","text":"<p>\u4e00\u4e2a\u6700\u6700\u6700\u7b80\u5355\u7684\u4f7f\u7528<code>mkdocs</code> \u521b\u5efa\u535a\u5ba2\u7cfb\u7edf\u7684\u6848\u4f8b\u5c31\u7ed3\u675f\u4e86\uff0c\u7b80\u5355\u7684\u603b\u7ed3\u4e00\u4e0b\uff1a</p> <p>\u9996\u5148<code>mkdocs</code> \u662f\u57fa\u4e8e<code>python</code> \u7684\u7b2c\u4e09\u65b9\u8f6f\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u4f9d\u8d56\u5176<code>python</code> \u73af\u5883\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528\u8be5\u5de5\u5177\uff0c\u5f97\u5148\u5b89\u88c5<code>python</code>\u3002</p> <p>https://www.python.org/</p> <p>\u5176\u6b21\u4f7f\u7528\u7684\u535a\u5ba2\u7cfb\u7edf\u662f\u6e90\u4e8e<code>mkdocs</code> \u7684\u7b2c\u4e09\u65b9\u4e3b\u9898<code>material</code>\uff0c\u4e5f\u662f\u9700\u8981\u989d\u5916\u5b89\u88c5\u7684\u3002</p> <p>https://github.com/squidfunk/mkdocs-material</p> <p>\u63a5\u7740\u4fbf\u662f\u5bfc\u5165\u4e86<code>Giscus</code>\u8bc4\u8bba\u7cfb\u7edf\uff0c\u5b83\u662f<code>github</code>\u4e2d\u7684\u4e00\u4e2a\u5e94\u7528\u8f6f\u4ef6\uff0c\u9700\u8981\u5148\u5230<code>github</code>\u4e0a\u8fdb\u884c\u5b89\u88c5\uff0c\u800c\u540e\u5230https://giscus.app/zh-CN\u8fdb\u884c\u914d\u7f6e\uff0c\u83b7\u53d6\u5230\u76f8\u5173\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6700\u540e\u901a\u8fc7\u8986\u76d6<code>mkdocs</code> \u539f\u59cb\u6587\u4ef6\u7684\u65b9\u5f0f\u96c6\u6210\u5230<code>mkdocs</code> \u4e2d\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8986\u76d6<code>mkdocs</code> \u9700\u8981\u4fee\u6539<code>mkdocs.yml</code>\u914d\u7f6e\u6587\u4ef6\uff0c\u5728<code>theme</code> \u4e2d\u5f15\u5165<code>custom_dir</code> \u76f8\u5173\u914d\u7f6e\u3002</p> <p>\u6700\u540e\u4fbf\u662f\u96c6\u6210\u4e86<code>RSS</code>\uff0c\u5b83\u4e5f\u662f\u4e00\u4e2a\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u989d\u5916\u5b89\u88c5\uff0c\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u9700\u8981\u5728<code>plugins</code> \u4e2d\u8fdb\u884c\u914d\u7f6e<code>RSS</code> \u76f8\u5173\u4fe1\u606f\u3002</p>"},{"location":"archive/2024.html","title":"2024","text":""},{"location":"category/%E9%9A%8F%E7%AC%94.html","title":"\u968f\u7b14","text":""}]}