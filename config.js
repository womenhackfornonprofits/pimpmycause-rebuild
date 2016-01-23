module.exports = {
    "siteName": "Pimp My Cause",
    "siteRoot": "http://localhost:8080",
    "sitePort": 8080,
    "logging": {
        "level": "info"
    },
    "db": {
        "type": "mongo",
        "servers": [
            "mongodb://127.0.0.1:27017/"
        ],
        "name": "pimpmycause",
        "writeConcern": 1
    },
    "cache": {
        "fake": true,
        "host": "localhost",
        "port": 6379
    },
    "settings": {
        "use_memory": false,
        "use_cache": false
    },
    "templates": {
        "use_memory": true,
        "use_cache": false
    },
    "plugins": {
        "caching": {
            "use_memory": false,
            "use_cache": false
        }
    },
    "registry": {
        "type": "mongo"
    },
    "session": {
        "storage": "mongo"
    },
    "media": {
        "provider": "mongo",
        "max_upload_size": 6291456
    },
    "cluster": {
        "workers": 1,
        "self_managed": true
    },
    "siteIP": "0.0.0.0"
};

