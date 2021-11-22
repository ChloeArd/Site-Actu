self.addEventListener("install", function(event) {
    // Here we use waitUntil which waits for a promise to validate the installation
    event.waitUntil(
        caches.open("mon-site-cache-v1").then(function(cache) {
            // We cache a list of URLs that are the foundation of our app.
            return cache.addAll([
                "/",
                "/styles/main.css",
                "/script/core.js"
            ]);
        })
    );
});

// We indicate that for each request, if it matches our cache URLs defined above, then we will serve the cache rather than making the real request over the network.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache HIT, we return the cached response.
                    if (response) {
                        return response;
                    }

                    // Otherwise we actually perform the request and return its content.
                    return fetch(event.request);
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