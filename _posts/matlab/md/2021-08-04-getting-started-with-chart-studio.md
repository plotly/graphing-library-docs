---
description: Get started with Plotly's MATLAB<sup>&reg;</sup> graphing library to make interactive, publication-quality graphs online.
name: Getting Started with Plotly and Chart Studio
display_as: chart_studio
order: 1
permalink: matlab/getting-started-with-chart-studio/
thumbnail: thumbnail/bubble.jpg
layout: base
language: matlab
page_type: u-guide
---

<section class="section">
    <h2>Installation</h2>
    <div class="content-box">
        <p >
            If you have not done so already, download and uncompress the <a  href="https://github.com/plotly/MATLAB-api/archive/master.zip">Plotly Graphing Library for MATLAB<sup>&reg;</sup></a>.
        </p>
    </div>
</section>

<section class="section">
    <h2 >Initialization</h2>
    <div class="content-box">
        <p >
            In your MATLAB<sup>&reg;</sup> console, begin by locating the downloaded directory, and running <code class="no-padding">plotlysetup_online()</code>.
        </p>

        <pre><code>cd ~/Downloads/plotly-graphing-library-for-matlab-master
plotlysetup_online('DemoAccount', 'lr1c37zw81')</code></pre>

        <p >
            You'll need to replace <code class="no-padding">"DemoAccount"</code> and <code class="no-padding">"lr1c37zw81"</code> with your Plotly username and <a href="https://plotly.com/settings/api/" target="_blank">API key</a>.
        </p>

        <p >
            <a href="https://plotly.com/settings/api/" target="_blank">Find my API key.</a>
        </p>

        <p >
            You only have to set this up if it's your first time using a Plotly API.
        </p>

        <p >
            This will set up your credentials and import the Plotly library into your MATLAB<sup>&reg;</sup> toolboxes. You can now delete the downloaded folder.
        </p>
    </div>
</section>

<section class="section">
    <h2>Special Instructions for <a class="no_underline"  href="https://plotly.com/product/enterprise/">Chart Studio Enterprise</a> Users</h2>
    <div class="content-box">
        <p>
            Your API key for a Chart Studio Enterprise account will be different from an account on the Plotly cloud. Visit  https://plotly.your-company.com/settings/api/ to find your Chart Studio Enterprise API key. Remember to replace "your-company.com" with the URL of your Chart Studio Enterprise server.
        </p>
        <p>Additionally, you'll have to change the MATLAB<sup>&reg;</sup> Open Source Graphing Library endpoint so that it points to your company's Plotly server instead of Plotly's cloud. In your MATLAB<sup>&reg;</sup> console, enter:<p>
        <br>
        <pre><code class="MATLAB">saveplotlyconfig('https://plotly.your-company.com', 'https://stream-plotly.your-company.com')</code></pre>
        <br>
        <p>Alternatively, if you'd like to set your configuration to create <a  href="http://help.plot.ly/how-sharing-works-in-plotly/">private plots</a> by default you should enter:
        <p>
        <br>
        <pre><code class="MATLAB">saveplotlyconfig('https://plotly.your-company.com', 'https://stream-plotly.your-company.com', 'private')</code></pre>
        <br>

        <p>
            Make sure to replace "your-company.com" with the URL of your Chart Studio Enterprise server.<b>Questions? Contact your Plotly representative.</b>
        </p>
    </div>
</section>

<section class="section">
    <h2 >Start Plotting <b>Online</b>!</h2>
    <div class="content-box">
        <p >
            Now you can convert your MATLAB<sup>&reg;</sup> figures into beautiful, interactive, online graphs with <code class="no-padding">fig2plotly()</code>:
        </p>

        <pre><code>[X,Y,Z] = peaks;
contour(X,Y,Z,20);

fig2plotly(gcf, 'offline', false)</code></pre>

        <p >
                Note: <code class="no-padding">fig2plotly()</code> will render your plot using Plotly's own color and styling by default. To preserve your original MATLAB<sup>&reg;</sup> color and styling, use: <code class="no-padding">fig2plotly(gcf,'strip',false)</code>.
        </p>

        <p >
                <a href="https://plotly.com/matlab/offline/">Learn more about using Plotly Offline for Matlab.</a>
        </p>
    </div>
</section>

<section class="section">
    <h2 >Response</h2>
        <div class="content-box" >
            <p >
                Copy and paste the URL into your browser to see your graph!
            </p>

            <pre><code>url: 'https://plotly.com/~MATLABAPI/72'
message: [1x0 char]
warning: [1x0 char]
filename: 'untitled'
error: [1x0 char]</code></pre>
        </div>
</section>

<section class="section">
    <h2>Credentials</h2>
    <div class="content-box">
        <p >
            The initialization step places a special
            <strong>.plotly/.credentials</strong> file in your home
            directory. Your <strong>~/.plotly/.credentials</strong> file
            should look something like this:
        </p>
        <pre><code>
{
"username": "DemoAccount",
"stream_ids": ["ylosqsyet5", "h2ct8btk1s", "oxz4fm883b"],
"api_key": "lr1c37zw81"
}
        </code></pre>
        <p >
            You can change the contents of this file manually or as
            described in the <strong>Initialization</strong> section.
        </p>
    </div>
</section>