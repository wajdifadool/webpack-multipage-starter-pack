<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Webpack_Starter_Template_for_Multiple_Pages_0"></a>Webpack Starter Template for Multiple Pages</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3">This is a webpack starter template for building web applications with multiple HTML and JavaScript files. It allows you to have separate entry points for each page, enabling you to organize your codebase efficiently.</p>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="Features_4"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7">Supports multiple HTML pages with separate JavaScript files.</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Automatically generates HTML files and bundles JavaScript and CSS files using webpack.</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Uses Babel to transpile JavaScript files, allowing you to use modern JavaScript features.</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Includes support for CSS files with automatic vendor prefixing.</li>
<li class="has-line-data" data-line-start="10" data-line-end="12">Provides a development server with hot reloading for easy development.</li>
</ul>
<h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="How_to_Use_12"></a>How to Use</h2>
<ol>
<li class="has-line-data" data-line-start="14" data-line-end="15">Clone this repository:</li>
</ol>
<pre><code class="has-line-data" data-line-start="16" data-line-end="17"></code></pre>
<ol start="2">
<li class="has-line-data" data-line-start="17" data-line-end="18">Install dependencies:</li>
</ol>
<pre><code class="has-line-data" data-line-start="19" data-line-end="21">npm install 
</code></pre>
<ol start="3">
<li class="has-line-data" data-line-start="21" data-line-end="22">Start the development server:</li>
</ol>
<pre><code class="has-line-data" data-line-start="23" data-line-end="25">npm run dev 
</code></pre>
<p class="has-line-data" data-line-start="26" data-line-end="29">This will start the development server and open your default web browser.<br>
You can start coding your application,<br>
and any changes you make will be automatically reflected in the browser. (use live server)</p>
<ol start="4">
<li class="has-line-data" data-line-start="30" data-line-end="31">Build for production:</li>
</ol>
<pre><code class="has-line-data" data-line-start="32" data-line-end="34">npm start 
</code></pre>
<p class="has-line-data" data-line-start="34" data-line-end="36">This will create a production-ready build of your application in the<br>
<code>dist</code> directory. make sure t delete the<code>mode: 'development'</code> in .config.json</p>
<h2 class="code-line" data-line-start=37 data-line-end=38 ><a id="Configuration_37"></a>Configuration</h2>
<ul>
<li class="has-line-data" data-line-start="39" data-line-end="40"><strong>Webpack Configuration</strong>: The webpack configuration is set up to have multiple entry points for each page. It automatically generates HTML files for each page and bundles JavaScript and CSS files accordingly.</li>
<li class="has-line-data" data-line-start="40" data-line-end="41"><strong>Babel Configuration</strong>: Babel is configured to transpile JavaScript files using the <code>@babel/preset-env</code> preset.</li>
<li class="has-line-data" data-line-start="41" data-line-end="42"><strong>MiniCssExtractPlugin</strong>: This plugin is used to extract CSS into separate files.</li>
</ul>
