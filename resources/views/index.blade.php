<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel with Vuetify</title>

        <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
            rel="stylesheet"
        />
        <link
            href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
            rel="stylesheet"
        />
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('js_generated/manifest.js') }}"></script>
        <script src="{{ mix('js_generated/vendor.js') }}"></script>
        <script src="{{ mix('js_generated/main.js') }}"></script>
    </body>
</html>
