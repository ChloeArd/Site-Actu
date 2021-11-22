self.addEventListener("install", function(event) {
    // Here we use waitUntil which waits for a promise to validate the installation
    event.waitUntil(
        caches.open("v1").then(function(cache) {
            // We cache a list of URLs that are the foundation of our app.
            return cache.addAll([
                "/",
                "/public/index.html",
                "/public/build/css/front.css",
                "/public/build/js/front.js"
            ]);
        })
    );
});

// We indicate that for each request, if it matches our cache URLs defined above, then we will serve the cache rather than making the real request over the network.
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
            if (response !== undefined) {
                return response;
            }
            else {
                return fetch(event.request).then(function (response) {
                    // response may be used only once
                    // we need to save clone to put one copy in cache
                    // and serve second one
                    let responseClone = response.clone();

                    caches.open('v1').then(function (cache) {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                })
            }
    }));
});