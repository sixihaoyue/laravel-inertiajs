<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="{{ mix('release/css/app.css') }}" rel="stylesheet">
    <script src="{{ mix('release/js/manifest.js') }}" defer></script>
    <script src="{{ mix('release/js/vendor.js') }}" defer></script>
    <script src="{{ mix('release/js/app.js') }}" defer></script>
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>
