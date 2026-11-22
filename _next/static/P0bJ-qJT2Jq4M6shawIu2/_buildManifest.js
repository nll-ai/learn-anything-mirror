self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/learn-anything-mirror/kb/:path*",
        "destination": "/learn-anything-mirror/kb/:path*.html"
      }
    ],
    "beforeFiles": [
      {
        "source": "/learn-anything-mirror/kb/:slug",
        "destination": "/learn-anything-mirror/kb/:slug/index.html"
      },
      {
        "source": "/learn-anything-mirror/kb/:slug/",
        "destination": "/learn-anything-mirror/kb/:slug/index.html"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()