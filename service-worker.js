self.addEventListener("install", function(event) {
    // Here we use waitUntil which waits for a promise to validate the installation
    event.waitUntil(
        caches.open("jsmonthly").then(function(cache) {
            // We cache a list of URLs that are the foundation of our app.
            return cache.addAll([
                "/public/index.html",
                "/public/build/css/front.css",
                "/public/build/js/front.js"
            ]);
        })
    );
});

// We indicate that for each request, if it matches our cache URLs defined above, then we will serve the cache rather than making the real request over the network.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open("jsmontly").then(function(cache) {
                    return cache.match(event.request);
                }
            )
    );
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("/service-worker.js").then(
            function(registration) {
                console.log("Registration succeeded. Scope is ", registration.scope);
            },
            function(err) {
                console.log("Registration failed with ", err);
            }
        );
    });
}