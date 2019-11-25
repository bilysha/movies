webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production === true) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
var init = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
        .then(function () { return window.appBootstrap && window.appBootstrap(); })
        .catch(function (err) { return console.error(err); });
};
init();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().onDestroy(function () {
    init();
});
//# sourceMappingURL=C:/MY_GITHUB/movies/src/main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_module__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, requestService, storage, zone) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requestService = requestService;
        this.storage = storage;
        this.zone = zone;
        this.counter = 0;
        this.isOpenedCategory = false;
        this.isOpenedGenres = false;
        this.query = '';
        this.activeLang = this.storage.getLanguage();
        this.cms = this.storage.getLangFile();
        this.genres = this.storage.getGenres();
        this.results = [];
        this.filters = this.cms.filters;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.genres.length) {
            this.requestService.uploadGenres()
                .then(function (res) {
                _this.storage.setGenres(res.json().genres);
                _this.genres = _this.storage.getGenres();
            });
        }
    };
    AppComponent.prototype.findFilms = function () {
        if (this.query.length > 2) {
            this.router.navigate(['search', this.query, 'page', 1]);
        }
        this.query = '';
    };
    AppComponent.prototype.openFilm = function (id) {
        this.router.navigate(['detail', id]);
        this.query = '';
    };
    AppComponent.prototype.doSearch = function () {
        var _this = this;
        if (this.query.length > 2) {
            this.requestService.findFilms(this.query, 1)
                .then(function (res) {
                _this.results = res.json().results;
                _this.normalizeImgPath();
            });
        }
    };
    AppComponent.prototype.normalizeImgPath = function () {
        for (var i = 0; i < this.results.length; i++) {
            if (!this.results[i].poster_path) {
                this.results[i].poster_path = 'resourses/no-photo-14.jpg';
            }
            else {
                this.results[i].poster_path = 'https://image.tmdb.org/t/p/w200' + this.results[i].poster_path;
            }
        }
    };
    AppComponent.prototype.toggleBlock = function (param) {
        switch (param) {
            case 'category':
                this.isOpenedCategory = !this.isOpenedCategory;
                break;
            case 'genres':
                this.isOpenedGenres = !this.isOpenedGenres;
                break;
            default:
                break;
        }
    };
    AppComponent.prototype.switchLang = function (param) {
        if (this.activeLang === param) {
            return;
        }
        this.activeLang = param;
        this.storage.setLanguage(this.activeLang);
        this.cms = this.storage.getLangFile();
        this.zone.runOutsideAngular(function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_module__["a" /* AppModule */]);
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(320),
            styles: [__webpack_require__(314)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* NgZone */]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/app.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmDetailComponent = /** @class */ (function () {
    function FilmDetailComponent(requestService, router, activatedRoute, storage) {
        this.requestService = requestService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.cms = this.storage.getLangFile();
        this.setDefolt();
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.setDefolt();
            var filmId = +params['id'];
            _this.requestService.uploadFilm(filmId)
                .then(function (res) {
                _this.film = res.json();
                document.title = _this.film.title;
                _this.parseReleaseDate();
                if (!_this.film.backdrop_path) {
                    _this.film.backdrop_path = './assets/img/no-photo-13.jpg';
                }
                else {
                    _this.film.backdrop_path = 'https://image.tmdb.org/t/p/original' + _this.film.backdrop_path;
                }
                _this.isEmptyFilm = false;
            })
                .then(function () {
                _this.requestService.uploadCredits(_this.film.id)
                    .then(function (res) {
                    _this.casts = res.json().cast;
                    _this.isEmptyCasts = false;
                });
                _this.requestService.uploadVideos(_this.film.id)
                    .then(function (res) {
                    _this.videos = res.json().results;
                    if (_this.videos.length > 0) {
                        for (var i = _this.videos.length - 1; i >= 0; i--) {
                            if ((_this.videos[i].name).indexOf('Trailer') >= 0) {
                                _this.videoUrl = 'https://www.youtube.com/embed/' + _this.videos[i].key;
                                _this.videoName = _this.videos[i].name;
                                _this.isEmptyVideos = false;
                                break;
                            }
                        }
                        if (!_this.videoUrl.length) {
                            _this.videoName = _this.videos[0].name;
                            _this.videoUrl = 'https://www.youtube.com/embed/' + _this.videos[0].key;
                            _this.isEmptyVideos = false;
                        }
                    }
                });
                if (_this.film.belongs_to_collection) {
                    _this.requestService.uploadCollection(_this.film.belongs_to_collection.id)
                        .then(function (res) {
                        _this.collection = res.json();
                        for (var i = 0; i < _this.collection.parts.length; i++) {
                            if (!_this.collection.parts[i].poster_path) {
                                _this.collection.parts[i].poster_path = './assets/img/no-photo-14.jpg';
                            }
                            else {
                                _this.collection.parts[i].poster_path = 'https://image.tmdb.org/t/p/w200' + _this.collection.parts[i].poster_path;
                            }
                        }
                        _this.isEmptyCollection = false;
                    });
                }
                _this.requestService.uploadSimilarFilms(_this.film.id)
                    .then(function (res) {
                    _this.similarFilms = res.json().results;
                    if (_this.similarFilms.length > 0) {
                        _this.isEmptySimilar = false;
                    }
                });
            });
        });
    };
    FilmDetailComponent.prototype.openFilm = function (id) {
        this.router.navigate(['detail', id]);
    };
    FilmDetailComponent.prototype.openCollection = function (id) {
        this.router.navigate(['collection', id]);
    };
    FilmDetailComponent.prototype.setDefolt = function () {
        this.isEmptyFilm = true;
        this.isEmptyCollection = true;
        this.isEmptyVideos = true;
        this.isEmptySimilar = true;
        this.isEmptyCasts = true;
        this.isOpenedGeneral = false;
        this.isOpenedTrailer = false;
        this.isOpenedCollection = false;
        this.isOpenedCompanies = false;
        this.isOpenedRecomendations = false;
        this.film = [];
        this.videos = [];
        this.collection = [];
        this.similarFilms = [];
        this.casts = [];
        this.videoUrl = '';
    };
    FilmDetailComponent.prototype.parseReleaseDate = function () {
        var months = this.cms.months;
        var newReleaseDate;
        var day = this.film.release_date.slice(8, 10);
        if (day[0] === '0') {
            day = day.slice(1, 2);
        }
        var month = months[this.film.release_date.slice(5, 7).toString()];
        var year = this.film.release_date.slice(0, 4);
        newReleaseDate = day + ' ' + month + ' ' + year;
        this.film.release_date = newReleaseDate;
        this.film.parsed = true;
    };
    FilmDetailComponent.prototype.openArticle = function (param) {
        switch (param) {
            case 'general':
                this.isOpenedGeneral = !this.isOpenedGeneral;
                break;
            case 'trailer':
                this.isOpenedTrailer = !this.isOpenedTrailer;
                break;
            case 'collection':
                this.isOpenedCollection = !this.isOpenedCollection;
                break;
            case 'companies':
                this.isOpenedCompanies = !this.isOpenedCompanies;
                break;
            case 'recomendations':
                this.isOpenedRecomendations = !this.isOpenedRecomendations;
                break;
        }
    };
    FilmDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'film-detail',
            template: __webpack_require__(321),
            styles: [__webpack_require__(315)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
    ], FilmDetailComponent);
    return FilmDetailComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/film-detail.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmItemComponent = /** @class */ (function () {
    function FilmItemComponent(router, requestService, storage) {
        this.router = router;
        this.requestService = requestService;
        this.storage = storage;
        this.genres = [];
        this.isFavorite = false;
        this.cms = this.storage.getLangFile();
        this.favoriteMovies = storage.getFavorite();
    }
    FilmItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genres = this.storage.getGenres();
        if (!this.film.genres) {
            this.film.genres = this.film.genre_ids;
        }
        if (this.genres.length === 0) {
            this.requestService.uploadGenres()
                .then(function (res) { return _this.genres = res.json().genres; })
                .then(function () { return _this.parseGenres(); });
        }
        if (typeof this.film.parsed === 'undefined') {
            if (!this.film.poster_path) {
                this.film.poster_path = './assets/img/no-photo-14.jpg';
            }
            else {
                this.film.poster_path = 'https://image.tmdb.org/t/p/w500' + this.film.poster_path;
            }
        }
        if (this.film.overview) {
            if (this.film.overview.length > 200) {
                this.film.overview = this.film.overview.slice(0, 200).concat('...');
            }
        }
        else {
            this.film.overview = this.cms.noOverview;
        }
        if (!this.film.parsed) {
            this.parseReleaseDate();
        }
        this.parseGenres();
        this.setFavoriteState();
    };
    FilmItemComponent.prototype.parseGenres = function () {
        for (var j = 0; j < this.film.genres.length; j++) {
            for (var k = 0; k < this.genres.length; k++) {
                if (this.film.genres[j] === this.genres[k].id) {
                    this.film.genres[j] = {};
                    this.film.genres[j].id = this.genres[k].id;
                    this.film.genres[j].name = this.genres[k].name;
                    break;
                }
            }
        }
    };
    FilmItemComponent.prototype.parseReleaseDate = function () {
        var months = this.cms.months;
        var newReleaseDate;
        var day = this.film.release_date.slice(8, 10);
        if (day[0] === '0') {
            day = day.slice(1, 2);
        }
        var month = months[this.film.release_date.slice(5, 7).toString()];
        var year = this.film.release_date.slice(0, 4);
        newReleaseDate = day + ' ' + month + ' ' + year;
        this.film.release_date = newReleaseDate;
        this.film.parsed = true;
    };
    FilmItemComponent.prototype.setFavoriteState = function () {
        if (this.favoriteMovies.indexOf(this.film.id) < 0) {
            this.isFavorite = false;
        }
        else {
            this.isFavorite = true;
        }
    };
    FilmItemComponent.prototype.toggleFavorite = function (id) {
        this.storage.updateFavorite(id);
        this.setFavoriteState();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], FilmItemComponent.prototype, "film", void 0);
    FilmItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'film-item',
            template: __webpack_require__(322),
            styles: [__webpack_require__(316)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _c || Object])
    ], FilmItemComponent);
    return FilmItemComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/film-item.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsCollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmsCollectionComponent = /** @class */ (function () {
    function FilmsCollectionComponent(requestService, router, activatedRoute, storage) {
        this.requestService = requestService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.cms = this.storage.getLangFile();
        this.collection = {};
        this.isEmptyCollection = true;
    }
    FilmsCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var collectionId = this.activatedRoute.snapshot.url[1];
        this.requestService.uploadCollection(collectionId)
            .then(function (res) {
            _this.collection = res.json();
            if (_this.collection.overview.length === 0) {
                _this.collection.overview = _this.cms.noOverview;
            }
            _this.isEmptyCollection = false;
        });
    };
    FilmsCollectionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'films-collection',
            template: __webpack_require__(323),
            styles: [__webpack_require__(317)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
    ], FilmsCollectionComponent);
    return FilmsCollectionComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/films-collection.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilmsListComponent = /** @class */ (function () {
    function FilmsListComponent(activatedRoute, router, requestService, storage) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.requestService = requestService;
        this.storage = storage;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.cms = this.storage.getLangFile();
        this.films = [];
        this.favorites = [];
        this.searchResults = 0;
    }
    FilmsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.films = [];
            var originalPage;
            var filter;
            var page = params['page'];
            if (!page) {
                page = 1;
            }
            var firstParam = _this.activatedRoute.snapshot.url[0].path;
            switch (firstParam) {
                case 'favorite':
                    filter = 'favorite';
                    _this.title = 'favorite';
                    document.title = 'Filmsy: favorite';
                    break;
                case 'search':
                    filter = params['query'];
                    _this.title = 'search';
                    _this.query = filter;
                    document.title = 'Search: ' + filter;
                    break;
                case 'genres':
                    filter = params['genreId'];
                    _this.title = filter;
                    document.title = 'Filmsy: ' + filter;
                    break;
                default:
                    filter = params['filter'];
                    _this.title = filter;
                    document.title = 'Filmsy: ' + filter;
                    break;
            }
            var films = _this.storage.getFilms(filter, page);
            if (!films) {
                if (page % 2 === 0) {
                    originalPage = page / 2;
                }
                else {
                    originalPage = page / 2 + 0.5;
                }
                switch (firstParam) {
                    case 'favorite':
                        _this.films = [];
                        _this.favorites = _this.storage.getFavorite();
                        _this.totalResults = _this.favorites.length;
                        for (var i = 0; i < _this.favorites.length; i++) {
                            _this.requestService.uploadFilm(_this.favorites[i])
                                .then(function (res) { return _this.films.push(res.json()); });
                        }
                        break;
                    case 'search':
                        _this.requestService.findFilms(filter, originalPage)
                            .then(function (res) { return _this.parseRequest(res.json(), page, filter, originalPage); });
                        break;
                    case 'genres':
                        _this.requestService.uploadByGenre(filter, originalPage)
                            .then(function (res) { return _this.parseRequest(res.json(), page, filter, originalPage); });
                        break;
                    default:
                        _this.requestService.uploadList(filter, originalPage)
                            .then(function (res) { return _this.parseRequest(res.json(), page, filter, originalPage); });
                        break;
                }
            }
            else {
                _this.films = films;
                _this.totalPages = _this.storage.getTotalPages(filter);
                _this.totalResults = _this.storage.getTotalResults(filter);
                _this.pagesControl(+page);
            }
        });
    };
    FilmsListComponent.prototype.parseRequest = function (res, page, filter, originalPage) {
        console.log(res);
        this.storage.setFilms(filter, originalPage, res.results, res.total_pages * 2, res.total_results);
        this.films = this.storage.getFilms(filter, page);
        this.totalPages = this.storage.getTotalPages(filter);
        this.totalResults = this.storage.getTotalResults(filter);
        this.pagesControl(+page);
    };
    FilmsListComponent.prototype.pagesControl = function (page) {
        this.activePage = +page;
        this.possiblePages = [];
        this.showFirstPart = false;
        this.showSecondPart = false;
        if (this.totalPages < 8) {
            for (var i = 2; i < this.totalPages - 1; i++) {
                this.possiblePages.push(i);
            }
            return;
        }
        if (this.activePage <= 3) {
            this.showFirstPart = false;
            this.showSecondPart = true;
            this.possiblePages = [2, 3, 4];
            return;
        }
        else {
            this.showFirstPart = true;
        }
        if (this.activePage > this.totalPages - 3) {
            this.showSecondPart = false;
            this.possiblePages = [
                this.totalPages - 3,
                this.totalPages - 2,
                this.totalPages - 1
            ];
            return;
        }
        else {
            this.showSecondPart = true;
        }
        this.possiblePages = [
            this.activePage - 1,
            this.activePage,
            this.activePage + 1
        ];
    };
    FilmsListComponent.prototype.setPage = function (page) {
        var filter = this.activatedRoute.snapshot.url[0].path;
        switch (filter) {
            case 'genres': {
                var genreId = this.activatedRoute.snapshot.url[1].path;
                this.router.navigate(['genres', genreId, 'page', page]);
                break;
            }
            case 'search': {
                var query = this.activatedRoute.snapshot.url[1].path;
                this.router.navigate(['search', query, 'page', page]);
                break;
            }
            default: {
                this.router.navigate([filter, 'page', page]);
                break;
            }
        }
    };
    FilmsListComponent.prototype.changeFilter = function (filter) {
        this.router.navigate([filter, 'page', 1]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
    ], FilmsListComponent.prototype, "notify", void 0);
    FilmsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'films-list',
            template: __webpack_require__(324),
            styles: [__webpack_require__(318)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _e || Object])
    ], FilmsListComponent);
    return FilmsListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/films-list.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(storage) {
        this.storage = storage;
        this.cms = this.storage.getLangFile();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "title", void 0);
    LoaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'loader',
            template: __webpack_require__(325),
            styles: [__webpack_require__(319)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object])
    ], LoaderComponent);
    return LoaderComponent;
    var _a;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/loader.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/safe.pipe.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=C:/MY_GITHUB/movies/src/environment.prod.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return apiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return langEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return langRu; });
var apiKey = 'api_key=07dc8f6435c41ca3ef4a46c9a0f91344';
var url = 'https://api.themoviedb.org/3';
var langEn = 'language=en-US';
var langRu = 'language=ru-RU';
//# sourceMappingURL=C:/MY_GITHUB/movies/src/constants.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eng; });
var eng = {
    categories: 'Categories',
    genres: 'Genres',
    searchPlaceholder: 'Type to search',
    noResults: 'no results for this input...',
    moreResults: 'show more...',
    thanks: 'Thanks for movies to',
    release: 'Release',
    months: {
        '01': 'January',
        '02': 'Febrary',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'Jule',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    },
    totalVotes: 'votes total',
    general: 'General info',
    casts: 'Casts',
    budget: 'Budget',
    popularity: 'Popularity',
    trailer: 'Trailer',
    collection: 'Collection',
    companies: 'Companies',
    recomendations: 'Recomendations',
    overview: 'Overview',
    noOverview: 'No overview',
    totalMovies: 'Total movies',
    warning_1: 'There are no movies in',
    warning_1_1: 'category',
    warning_2: 'Try to add one by clicking on',
    warning_2_1: 'mark in the title of the movie',
    warning_3: 'Nothing found on your',
    warning_3_1: 'request',
    loading: 'Loading',
    filters: [
        {
            name: 'Favorite',
            key: 'favorite'
        },
        {
            name: 'Popular',
            key: 'popular'
        },
        {
            name: 'Top rated',
            key: 'top_rated'
        },
        {
            name: 'Upcoming',
            key: 'upcoming'
        }
    ]
};
//# sourceMappingURL=C:/MY_GITHUB/movies/src/eng.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rus; });
var rus = {
    categories: 'Категории',
    genres: 'Жанры',
    searchPlaceholder: 'Введите запрос для поиска',
    noResults: 'нет результатов для данного запроса',
    moreResults: 'показать все',
    thanks: 'Спасибо за фильмы',
    release: 'Дата выхода',
    months: {
        '01': 'Января',
        '02': 'Фефраля',
        '03': 'Марта',
        '04': 'Апреля',
        '05': 'Мая',
        '06': 'Июня',
        '07': 'Июля',
        '08': 'Августа',
        '09': 'Сентября',
        '10': 'Октября',
        '11': 'Ноября',
        '12': 'Декабря',
    },
    totalVotes: 'всего голосов',
    general: 'Общая информация',
    casts: 'Актеры',
    budget: 'Бюджет',
    popularity: 'Популярность',
    trailer: 'Трейлер',
    collection: 'Коллекция',
    companies: 'Компании',
    recomendations: 'Рекомендации',
    overview: 'Описание',
    noOverview: 'Описание отсутствует',
    totalMovies: 'Всего фильмов',
    warning_1: 'В категории',
    warning_1_1: 'нет фильмов',
    warning_2: 'Попробуйте добавить их нажав на',
    warning_2_1: 'иконку в названии фильма',
    warning_3: 'По запросу',
    warning_3_1: 'ничего не найдено',
    loading: 'Загружаю',
    filters: [
        {
            name: 'Избранное',
            key: 'favorite'
        },
        {
            name: 'Популярное',
            key: 'popular'
        },
        {
            name: 'Хайповое',
            key: 'top_rated'
        },
        {
            name: 'Скоро в прокате',
            key: 'upcoming'
        }
    ]
};
//# sourceMappingURL=C:/MY_GITHUB/movies/src/rus.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_eng__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_rus__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.engObj = __WEBPACK_IMPORTED_MODULE_1__shared_eng__["a" /* eng */];
        this.rusObj = __WEBPACK_IMPORTED_MODULE_2__shared_rus__["a" /* rus */];
        this.favoriteMovies = localStorage.getItem('favorite') || [];
        if (this.favoriteMovies.length > 0) {
            this.favoriteMovies = JSON.parse(this.favoriteMovies);
        }
        this.genres = [];
        this.films = { 'popular': {},
            'top_rated': {},
            'upcoming': {}
        };
        this.activeGenre = -1;
    }
    StorageService.prototype.setGenres = function (genres) {
        this.genres = genres;
    };
    StorageService.prototype.getGenres = function () {
        return this.genres;
    };
    StorageService.prototype.setFilms = function (filter, page, list, totalPages, totalResults) {
        this.films[filter][(page * 2 - 1).toString()] = list.slice(0, 10);
        this.films[filter][(page * 2).toString()] = list.slice(10, 20);
        this.films[filter]['totalPages'] = totalPages;
        this.films[filter]['totalResults'] = totalResults;
    };
    StorageService.prototype.getFilms = function (filter, page) {
        if (typeof this.films[filter] === 'undefined') {
            this.films[filter] = {};
        }
        return this.films[filter][page.toString()];
    };
    StorageService.prototype.getTotalPages = function (filter) {
        return this.films[filter]['totalPages'] || 0;
    };
    StorageService.prototype.getTotalResults = function (filter) {
        return this.films[filter]['totalResults'] || 0;
    };
    StorageService.prototype.setActiveGenre = function (id) {
        this.activeGenre = id;
    };
    StorageService.prototype.getActiveGenre = function () {
        return this.activeGenre;
    };
    StorageService.prototype.getFavorite = function () {
        return this.favoriteMovies;
    };
    StorageService.prototype.updateFavorite = function (id) {
        var index = this.favoriteMovies.indexOf(id);
        if (index < 0) {
            this.favoriteMovies.push(id);
        }
        else {
            this.favoriteMovies.splice(index, 1);
        }
        localStorage.setItem('favorite', JSON.stringify(this.favoriteMovies));
    };
    StorageService.prototype.getLanguage = function () {
        return localStorage.getItem('lang') || 'Russian';
    };
    StorageService.prototype.setLanguage = function (lang) {
        localStorage.setItem('lang', lang);
    };
    StorageService.prototype.getLangFile = function () {
        var lang = this.getLanguage();
        if (lang === 'English') {
            return this.engObj;
        }
        else {
            return this.rusObj;
        }
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/storage.service.js.map

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\n.content {\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.center {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  background-color: #464547;\r\n  color: #fff;\r\n}\r\n\r\nheader {\r\n  padding: 10px 0;\r\n}\r\nheader .center {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n}\r\n\r\n.settings {\r\n  background-color: #fff;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.settings .center {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: end;\r\n      justify-content: flex-end;\r\n}\r\n\r\n.settings ul {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.settings ul li {\r\n  margin-left: 20px;\r\n  padding: 10px 0;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  cursor: pointer;\r\n  border-bottom: 5px solid transparent;\r\n}\r\n\r\n.settings ul li:hover {\r\n  color: #39C2D7;\r\n}\r\n\r\n.settings ul li.active {\r\n  border-bottom-color: #39C2D7;\r\n}\r\n\r\n.settings ul li img {\r\n  margin-left: 10px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 20px;\r\n  font-size: 24px;\r\n  line-height: 50px;\r\n}\r\n\r\nfooter p {\r\n  color: #fff;\r\n}\r\n\r\nfooter p a {\r\n  font-weight: bold;\r\n}\r\n\r\n.home-page {\r\n  width: 30px;\r\n  height: 30px;\r\n  fill: #fff;\r\n}\r\n\r\n.home-page:hover {\r\n  fill: #39C2D7;\r\n}\r\n\r\nfooter p a {\r\n  color: #39C2D7;\r\n}\r\n\r\nheader .search-container {\r\n  position: relative;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.search-container input {\r\n  background-color: #fff;\r\n  color: #464547;\r\n  border: none;\r\n  padding: 0 10px;\r\n  border-radius: 5px;\r\n  min-width: 250px;\r\n}\r\n\r\n.search-results {\r\n  box-shadow: 0px 0px 5px 1px #39C2D7;\r\n  background-color: #fff;\r\n  color: #464547;\r\n  position: absolute;\r\n  top: 40px;\r\n  width: 100%;\r\n  font-size: 18px;\r\n  line-height: 18px;\r\n  z-index: 1;\r\n}\r\n\r\n.search-results ul li img {\r\n  width: 50px;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.search-results ul li:hover {\r\n  background-color: #464547;\r\n  color: #fff;\r\n}\r\n.search-results ul li {\r\n  padding: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-results ul li:not(:last-child) {\r\n  border-bottom: 1px solid #c8c8c8;\r\n}\r\n\r\n.search-results ul li:nth-child(5) {\r\n  text-align: right;\r\n}\r\n\r\n.search-container .search-button {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 5px;\r\n  fill: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-container .search-button:hover {\r\n  fill: #39C2D7;\r\n}\r\n\r\n.main-content {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.category-container, .genres-container, .films-container {\r\n  background-color: #fff;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.2);\r\n  border-collapse: collapse;\r\n}\r\n\r\n.category-container, .genres-container {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.category-container p, .genres-container p {\r\n  border-bottom: 1px solid #c8c8c8;\r\n}\r\n\r\n.sidebar {\r\n  min-width: 20%;\r\n  max-width: 20%;\r\n  height: -webkit-max-content;\r\n  height: -moz-max-content;\r\n  height: max-content;\r\n}\r\n\r\n.sidebar article p {\r\n  font-size: 24px;\r\n  padding: 10px;\r\n  font-weight: bold;\r\n  color: #39C2D7;\r\n}\r\n\r\n.sidebar ul {\r\n  margin: 10px 0;\r\n}\r\n\r\n.sidebar ul li a{\r\n  padding-left: 20px;\r\n}\r\n\r\n.sidebar ul li, ul li a {\r\n  width: 100%;\r\n}\r\n\r\n.sidebar ul li a{\r\n  display: block;\r\n  cursor: pointer;\r\n  transition: color 0.5s;\r\n  line-height: 24px;\r\n}\r\n\r\n.sidebar ul li a:before {\r\n  content: '-';\r\n  margin-right: 5px;\r\n}\r\n\r\n.sidebar ul li a:hover {\r\n  color: #39C2D7;\r\n  background-color: #464547;\r\n  transition: color 0.5s;\r\n}\r\n\r\n.sidebar .active {\r\n  border-right: 5px solid #39C2D7;\r\n}\r\n\r\n.sidebar p i {\r\n  display: none;\r\n}\r\n\r\n.films-container {\r\n  min-width: 78%;\r\n  max-width: 78%;\r\n  padding: 20px 0;\r\n  padding-bottom: 80px;\r\n  position: relative;\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\nfooter p {\r\n  float: right;\r\n}\r\n\r\n@media all and (min-width: 100px) and (max-width: 851px) {\r\n\r\n  .main-content {\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n  }\r\n\r\n  .sidebar, .category-container, .genres-container, .films-container {\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .sidebar p i {\r\n    color: #39C2D7;\r\n    display: block;\r\n    float: right;\r\n  }\r\n\r\n  .category-container, .genres-container {\r\n    max-height: 45px;\r\n    overflow: hidden;\r\n    transition: max-height 0.5s;\r\n  }\r\n\r\n  .category-container.opened {\r\n    max-height: 200px;\r\n  }\r\n\r\n  .genres-container.opened {\r\n    max-height: 600px;\r\n  }\r\n\r\n  .sidebar ul {\r\n    margin: 0;\r\n  }\r\n\r\n  .sidebar ul li a{\r\n    padding: 10px;\r\n    margin: 0 10px;\r\n    border-bottom: 5px solid transparent;\r\n  }\r\n\r\n  .sidebar ul li, ul li a {\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n  }\r\n\r\n  .sidebar ul li a:before {\r\n    content: '';\r\n    margin-right: 0;\r\n  }\r\n\r\n  .sidebar ul li a:hover {\r\n    color: #39C2D7;\r\n    background-color: transparent;\r\n    transition: color 0.5s;\r\n  }\r\n\r\n  .sidebar ul li a.active {\r\n    border-right: none;\r\n    border-bottom: 5px solid #39C2D7;\r\n  }\r\n\r\n  .category-container ul, .genres-container ul {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n\r\n  .category-container ul {\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n  }\r\n\r\n  .genres-container ul{\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n  }\r\n\r\n  @media all and (min-width: 100px) and (max-width: 420px) {\r\n\r\n    .search-container input {\r\n      min-width: 200px;\r\n    }\r\n\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = ".title {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\nul {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\nul li {\r\n  margin-left: 10px;\r\n}\r\n\r\nul li, ul li a {\r\n  transition: color 0.5s;\r\n}\r\nul li:hover, ul li a:hover {\r\n  color: #39C2D7;\r\n}\r\n\r\nimg {\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);\r\n  border-collapse: collapse;\r\n}\r\n\r\narticle {\r\n  padding: 0 20px;\r\n  padding-bottom: 20px;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #c8c8c8;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\narticle:not(:first-child):not(:nth-child(2)) .subtitle {\r\n  cursor: pointer;\r\n}\r\narticle:not(:first-child):not(:nth-child(2)) .subtitle:hover {\r\n  color: #39C2D7;\r\n  transition: color 0.5s;\r\n}\r\narticle:not(:first-child):not(:nth-child(2)) {\r\n  max-height: 38px;\r\n  overflow: hidden;\r\n  transition: max-height 0.5s;\r\n}\r\narticle:not(:first-child):not(:nth-child(2)).opened {\r\n  max-height: 1000px;\r\n}\r\n\r\narticle p i {\r\n  margin-left: 10px;\r\n  float: right;\r\n  font-size: 18px;\r\n  color: #39C2D7;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 24px;\r\n  margin-bottom: 10px;\r\n  transition: color 0.5s;\r\n}\r\n\r\n.common-information img {\r\n  width: 100%;\r\n}\r\n\r\n.votes p {\r\n  text-align: center;\r\n  margin: 10px 0;\r\n}\r\n\r\n.overview {\r\n  text-align: justify;\r\n}\r\n\r\n.general-container p:not(.subtitle), .trailer-container p:not(.subtitle) {\r\n  margin-left: 20px;\r\n}\r\n\r\n.general-container p:not(.subtitle):not(:last-child), .general-container ul {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.genres-container, .casts-container {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: end;\r\n      align-items: flex-end;\r\n}\r\n\r\n.genres-container ul li:before, .casts-container ul li:before:not(:last-child) {\r\n  content: '-';\r\n}\r\n\r\n.genres-container ul li:not(:last-child):after, .casts-container ul li:not(:last-child):after {\r\n  content: ',';\r\n}\r\n\r\n.genres-container ul li:last-child:after, .casts-container ul li:last-child:after {\r\n  content: ';';\r\n}\r\n\r\n.casts-container ul li:hover .tooltip {\r\n  display: block;\r\n}\r\n\r\n.casts-container ul li .tooltip p {\r\n  margin-left: 0;\r\n  text-align: center;\r\n}\r\n\r\n.tooltip {\r\n  max-width: 120px;\r\n  display: none;\r\n  padding: 10px;\r\n  position: absolute;\r\n  box-shadow: 0px 0px 5px 1px #39C2D7;\r\n  background-color: #fff;\r\n}\r\n\r\n.tooltip img {\r\n  width: 100px;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\na.collection-name {\r\n  margin-left: 20px;\r\n  cursor: pointer;\r\n  transition: color 0.5s;\r\n}\r\n\r\n.collection-container ul, .similar-films ul {\r\n  min-width: 100%;\r\n  margin-left: 10px;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n.collection-container ul li, .similar-films ul li{\r\n  min-width: 100px;\r\n  max-width: 15%;\r\n}\r\nfigure, figure img {\r\n  min-width: 100%;\r\n  max-width: 100%;\r\n}\r\nfigure figcaption {\r\n  text-align: center;\r\n}\r\n\r\n.companies-container ul {\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n  margin-left: 10px;\r\n}\r\n\r\n.video-container {\r\n  width: 100%;\r\n  height: 350px;\r\n  margin: 0 auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n.video-container iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);\r\n  border-collapse: collapse;\r\n}\r\n\r\n.similar-films ul {\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-top: 20px;\r\n}\r\n\r\n@media all and (min-width: 250px) and (max-width: 651px) {\r\n  .video-container {\r\n    height: 300px;\r\n  }\r\n\r\n  .genres-container, .genres-container ul, .casts-container, .casts-container ul {\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-align: start;\r\n        align-items: flex-start;\r\n  }\r\n\r\n  .genres-container ul, .casts-container ul {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .genres-container ul li:before, .casts-container ul li:before {\r\n    content: '-';\r\n    margin-right: 5px;\r\n  }\r\n\r\n  .collection-container ul, .similar-films ul {\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n  }\r\n\r\n  @media all and (min-width: 250px) and (max-width: 551px) {\r\n    .video-container {\r\n      height: 250px;\r\n    }\r\n  }\r\n\r\n  @media all and (min-width: 250px) and (max-width: 451px) {\r\n    .video-container {\r\n      height: 200px;\r\n    }\r\n  }\r\n\r\n  @media all and (min-width: 250px) and (max-width: 351px) {\r\n    .video-container {\r\n      height: 150px;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "img[tabindex=\"0\"] {\r\n  cursor: zoom-in;\r\n}\r\nimg[tabindex=\"0\"]:focus {\r\n  position: fixed;\r\n  z-index: 10;\r\n  top: 50%;\r\n  left: 50%;\r\n  transition: all 1s;\r\n  transform: translate(-50%, -50%);\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 99%;\r\n  max-height: 99%;\r\n  box-shadow: 0 0 0 1000px rgba(0,0,0,0.7);\r\n}\r\nimg[tabindex=\"0\"]:focus,\r\nimg[tabindex=\"0\"]:focus ~ * {\r\n  pointer-events: none;\r\n  cursor: zoom-out;\r\n}\r\n\r\nsection {\r\n  margin: 10px 0;\r\n  border-bottom: 2px solid #EBEEF0;\r\n}\r\n\r\n.title {\r\n  padding: 20px;\r\n  padding-right: 70px;\r\n  min-width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.title a {\r\n  display: block;\r\n  color: #464547;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: color 0.5s;\r\n  max-width: -webkit-max-content;\r\n  max-width: -moz-max-content;\r\n  max-width: max-content\r\n}\r\n\r\n.title a:hover {\r\n  color: #39C2D7;\r\n}\r\n\r\n.bookmark, .added-bookmark {\r\n  width: 40px;\r\n  height: 40px;\r\n  position: absolute;\r\n  right: 12px;\r\n  top: 12px;\r\n  cursor: pointer;\r\n}\r\n.bookmark  {\r\n  fill: #464547;\r\n}\r\n.bookmark:hover {\r\n  fill: #39C2D7;\r\n}\r\n.added-bookmark path:last-child {\r\n  fill: #39C2D7;\r\n}\r\n.added-bookmark:hover {\r\n  fill: #800000;\r\n}\r\n\r\n.film-body {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-bottom: 20px;\r\n  padding: 0 20px 20px 20px;\r\n}\r\n\r\nimg {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n  min-width: 150px;\r\n  width: 25%;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);\r\n  border-collapse: collapse;\r\n  margin-right: 10px;\r\n}\r\n\r\n.film-info {\r\n  max-width: 70%;\r\n}\r\n\r\n.film-info p {\r\n  line-height: 20px;\r\n  margin-bottom: 10px;\r\n  text-align: justify;\r\n}\r\n\r\n.genres {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.genres p {\r\n  margin-right: 5px;\r\n}\r\n\r\n.genres ul {\r\n  width: 100%;\r\n}\r\n\r\n.genres ul li {\r\n  width: 100%;\r\n}\r\n\r\n.genres ul li a{\r\n  display: block;\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n  transition: color 0.5s;\r\n  width: 100%;\r\n}\r\n\r\n.genres ul li a:before {\r\n  content: '-';\r\n  margin: 0 5px;\r\n}\r\n\r\n.genres ul li a:hover {\r\n  color: #39C2D7;\r\n  background-color: #464547;\r\n}\r\n\r\n@media all and (min-width: 100px) and (max-width: 421px) {\r\n\r\n  .film-body {\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n  }\r\n\r\n  .film-body img {\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .film-body .film-info {\r\n    min-width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "section div {\r\n  padding: 0 20px;\r\n}\r\n\r\n.title {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin-bottom: 20px;\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid #c8c8c8;\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);\r\n  border-collapse: collapse;\r\n}\r\n\r\n.subtitle {\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  margin: 0 0 20px 20px;\r\n}\r\n\r\n.overview {\r\n  padding: 0px 40px 20px 40px;\r\n  border-bottom: 1px solid #c8c8c8;\r\n  text-align: justify;\r\n}\r\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = ".total-results, .no-movies {\r\n  font-size: 20px;\r\n  text-align: right;\r\n  padding: 0 20px 20px 20px;\r\n  border-bottom: 2px solid #EBEEF0;\r\n}\r\n\r\n.no-movies {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n  line-height: 28px;\r\n}\r\n\r\n.no-movies img {\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.total-results span, .no-movies span {\r\n  color: #39C2D7;\r\n  font-weight: bold;\r\n}\r\n\r\nnav {\r\n  background-color: #EBEEF0;\r\n  position: absolute;\r\n  bottom: 20px;\r\n  width: 100%;\r\n}\r\n\r\nnav ul {\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav ul li{\r\n  display: inline-block;\r\n  padding: 10px;\r\n  background-color: #fff;\r\n  color: #464547;\r\n  margin: 5px 2px;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);\r\n  border-collapse: collapse;\r\n}\r\n\r\nnav ul li:not(.many-pages) {\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li:not(.many-pages):not(.active):hover {\r\n  color: #39C2D7;\r\n}\r\n\r\nnav ul li.active {\r\n  background-color: #39C2D7;\r\n  color: #fff;\r\n}\r\n\r\n@media all and (min-width: 100px) and (max-width: 351px) {\r\n  nav ul li {\r\n    padding: 5px;\r\n    font-size: 10px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  border: 10px solid #464547;\r\n  border-top: 10px solid #39C2D7;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  animation: spin 3s linear infinite;\r\n  margin: 0 auto;\r\n  box-shadow: 0px 1px 1px rgba(0,0,0,0.5);\r\n  border-collapse: collapse;\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\np {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #39C2D7;\r\n}\r\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"content\">\r\n    <header>\r\n      <div class=\"center\">\r\n        <a routerLink=\"popular/page/1\">\r\n              <svg class=\"home-page\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"495.398px\" height=\"495.398px\" viewBox=\"0 0 495.398 495.398\" style=\"enable-background:new 0 0 495.398 495.398;\" xml:space=\"preserve\">\r\n                <g>\r\n                  <g>\r\n                    <g>\r\n                      <path d=\"M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391\r\n                        v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158\r\n                        c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747\r\n                        c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z\"/>\r\n                      <path d=\"M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401\r\n                        c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79\r\n                        c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z\"/>\r\n                    </g>\r\n                  </g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n                <g>\r\n                </g>\r\n              </svg>\r\n        </a>\r\n        <form class=\"search-container clearfix\" (ngSubmit)=\"findFilms()\">\r\n          <input #input (keyup)=\"doSearch()\" name=\"title\" [(ngModel)]=\"query\" type=\"text\" placeholder={{cms.searchPlaceholder}}>\r\n          <div class=\"search-results\" *ngIf=\"query.length > 2\">\r\n            <ul>\r\n              <li *ngIf=\"results.length === 0\">\r\n                {{cms.noResults}}\r\n              </li>\r\n              <li class=\"clearfix\" *ngFor=\"let film of results | slice:0:4\" (click)=\"openFilm(film.id)\">\r\n                <img src=\"{{film.poster_path}}\" />\r\n                {{film.title}}\r\n              </li>\r\n              <li (click)=\"findFilms()\" *ngIf=\"results.length > 3\">\r\n                {{cms.moreResults}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <svg (click)=\"findFilms()\" class=\"search-button\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250.313 250.313\" style=\"enable-background:new 0 0 250.313 250.313;\" xml:space=\"preserve\">\r\n            <g id=\"Search\">\r\n              <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76\r\n                c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911\r\n                c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38\r\n                c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146\r\n                c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236\r\n                C170.146,140.044,140.043,170.146,102.911,170.146z\"/>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n            <g>\r\n            </g>\r\n          </svg>\r\n\r\n        </form>\r\n      </div>\r\n    </header>\r\n    {{param}}\r\n    <section class=\"settings\">\r\n      <div class=\"center\">\r\n        <ul>\r\n          <li (click)=\"switchLang('Russian')\" [ngClass]=\"{'active': activeLang === 'Russian'}\">\r\n            Русский\r\n            <img src=\"./assets/img/russia.png\" />\r\n          </li>\r\n          <li (click)=\"switchLang('English')\" [ngClass]=\"{'active': activeLang === 'English'}\">\r\n            English\r\n            <img src=\"./assets/img/united-kingdom.png\" />\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </section>\r\n    <main class=\"center\">\r\n      <section class=\"main-content\">\r\n        <div class=\"sidebar\">\r\n          <div class=\"category-container\" [ngClass]=\"{'opened':isOpenedCategory}\" (click)=\"toggleBlock('category')\">\r\n              <article>\r\n                <p class=\"clearfix\">{{cms.categories}} : <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedCategory, 'fa-caret-up': isOpenedCategory}\"></i> </p>\r\n                <ul >\r\n                  <li *ngFor=\"let filter of filters\">\r\n                    <a routerLink=\"/{{filter.key}}\" routerLinkActive=\"active\">{{filter.name}}</a>\r\n                  </li>\r\n                </ul>\r\n              </article>\r\n          </div>\r\n          <div class=\"genres-container\" [ngClass]=\"{'opened':isOpenedGenres}\" (click)=\"toggleBlock('genres')\">\r\n            <loader *ngIf=\"!genres.length\" [title]=\"'genres'\"></loader>\r\n            <article *ngIf=\"genres.length\">\r\n              <p class=\"clearfix\">{{cms.genres}} : <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedGenres, 'fa-caret-up': isOpenedGenres}\"></i> </p>\r\n              <ul  *ngIf=\"genres.length\">\r\n                <li *ngFor=\"let genre of genres\">\r\n                  <a routerLink=\"/genres/{{genre.id}}\" routerLinkActive=\"active\">{{genre.name}}</a>\r\n                </li>\r\n              </ul>\r\n            </article>\r\n          </div>\r\n        </div>\r\n        <div class=\"films-container\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </section>\r\n    </main>\r\n  </div>\r\n<footer>\r\n  <div class=\"center clearfix\">\r\n    <p>{{cms.thanks}} <a href=\"https://www.themoviedb.org/\" target=\"blank\">MDB</a></p>\r\n  </div>\r\n</footer>\r\n</div>\r\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<loader *ngIf=\"isEmptyFilm\" [title]=\"'film detail'\"></loader>\r\n\r\n\r\n<section *ngIf=\"!isEmptyFilm\">\r\n  <article>\r\n    <p class=\"title\"><a href=\"{{film.homepage}}\" target=\"blank\">{{film.title}}</a></p>\r\n  </article>\r\n\r\n  <article class=\"common-information\">\r\n      <p class=\"subtitle\">{{film.tagline}}</p>\r\n      <img src=\"{{film.backdrop_path}}\">\r\n      <div class=\"votes\">\r\n        <p>{{film.vote_average}} / 10 ( {{film.vote_count}} {{cms.totalVotes}} )</p>\r\n      </div>\r\n      <p class=\"overview\">{{film.overview}}</p>\r\n  </article>\r\n\r\n  <article [ngClass]=\"{ 'opened': isOpenedGeneral }\" class=\"general-container\">\r\n    <p (click)=\"openArticle('general')\" class=\"subtitle\">{{cms.general}} <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedGeneral, 'fa-caret-up': isOpenedGeneral}\"></i> </p>\r\n    <div class=\"genres-container\">\r\n      <p>{{cms.genres}}:</p>\r\n      <ul>\r\n        <li *ngFor=\"let genre of film.genres\">\r\n          <a routerLink=\"/genres/{{genre.id}}/page/1\">{{genre.name}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"casts-container\" *ngIf=\"!isEmptyCasts\">\r\n      <p>{{cms.casts}}: </p>\r\n      <ul>\r\n        <li *ngFor=\"let cast of casts | slice:0:3\">\r\n          {{cast.name}}\r\n          <div class=\"tooltip\">\r\n            <img src=\"https://image.tmdb.org/t/p/w200{{cast.profile_path}}\" />\r\n            <p>{{cast.character}}</p>\r\n          </div>\r\n        </li>\r\n        <li *ngIf=\"casts.length > 4\">\r\n          ...\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <p *ngIf=\"film.budget > 0\">{{cms.budget}}: $ {{film.budget}} ;</p>\r\n    <p>{{cms.release}}: {{film.release_date}} ;</p>\r\n    <p>{{cms.popularity}}: {{film.popularity | number:'.0-0'}} .</p>\r\n  </article>\r\n\r\n  <article *ngIf=\"!isEmptyVideos\" [ngClass]=\"{ 'opened': isOpenedTrailer }\" class=\"trailer-container\">\r\n    <p (click)=\"openArticle('trailer')\" class=\"subtitle\">{{cms.trailer}} <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedTrailer, 'fa-caret-up': isOpenedTrailer}\"></i> </p>\r\n    <p>{{videoName}}</p>\r\n    <div class=\"video-container\">\r\n      ​<iframe [src]=\"videoUrl | safe\" allowfullscreen></iframe>\r\n    </div>\r\n  </article>\r\n\r\n  <article class=\"collection-container\" *ngIf=\"film.belongs_to_collection\" [ngClass]=\"{ 'opened': isOpenedCollection }\">\r\n    <div *ngIf=\"!isEmptyCollection\">\r\n      <p (click)=\"openArticle('collection')\" class=\"subtitle\">{{cms.collection}} <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedCollection, 'fa-caret-up': isOpenedCollection}\"></i> </p>\r\n      <a class=\"collection-name\" routerLink=\"/collection/{{collection.id}}\">{{collection.name}}: </a>\r\n      <ul>\r\n        <li *ngFor=\"let part of collection.parts | slice:0:5\">\r\n          <figure>\r\n            <img src=\"{{part.poster_path}}\">\r\n            <figcaption>\r\n              <a routerLink=\"/detail/{{part.id}}\">{{part.title}}</a>\r\n              </figcaption>\r\n          </figure>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </article>\r\n\r\n  <article class=\"companies-container\" *ngIf=\"film.production_companies.length > 0\" [ngClass]=\"{ 'opened': isOpenedCompanies }\">\r\n    <p (click)=\"openArticle('companies')\" class=\"subtitle\">{{cms.companies}} <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedCompanies, 'fa-caret-up': isOpenedCompanies}\"></i> </p>\r\n    <ul>\r\n      <li *ngFor=\"let company of film.production_companies\">\r\n        {{company.name}}\r\n      </li>\r\n    </ul>\r\n  </article>\r\n\r\n  <article class=\"similar-films\" *ngIf=\"!isEmptySimilar\" [ngClass]=\"{ 'opened': isOpenedRecomendations }\">\r\n    <p (click)=\"openArticle('recomendations')\" class=\"subtitle\">{{cms.recomendations}} <i class=\"fas\" [ngClass]=\"{'fa-caret-down': !isOpenedRecomendations, 'fa-caret-up': isOpenedRecomendations}\"></i> </p>\r\n    <ul>\r\n        <li *ngFor=\"let film of similarFilms | slice:0:5\">\r\n          <figure>\r\n            <img src=\"https://image.tmdb.org/t/p/w200{{film.poster_path}}\">\r\n            <figcaption>\r\n              <a routerLink=\"/detail/{{film.id}}\">{{film.title}}</a>\r\n              </figcaption>\r\n          </figure>\r\n        </li>\r\n      </ul>\r\n  </article>\r\n\r\n</section>\r\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<section class=\"clearfix\">\r\n\r\n  <p  class=\"title\">\r\n    <a routerLink=\"/detail/{{film.id}}\">\r\n      {{film.title}}\r\n    </a>\r\n    <svg [ngClass]=\"{'bookmark': !isFavorite, 'added-bookmark': isFavorite}\" (click)=\"toggleFavorite(film.id)\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 488.6 488.6\" xml:space=\"preserve\">\r\n      <g>\r\n        <g>\r\n          <path d=\"M475.214,188.1c3.1-6,3.6-12.8,1.5-19.2s-6.5-11.6-12.5-14.6l-54-27.4c-1.5-0.8-2.6-2.2-2.8-3.9\r\n            l-9.4-59.8c-1.9-12.3-12.4-21.2-24.8-21.2c-1.3,0-2.7,0.1-4,0.3l-59.8,9.5c-1.7,0.3-3.4-0.3-4.6-1.5l-42.7-42.9\r\n            c-4.7-4.8-11.1-7.4-17.8-7.4s-13,2.6-17.8,7.4l-42.8,42.8c-1,1-2.4,1.6-3.8,1.6c-0.3,0-0.6,0-0.8-0.1l-59.8-9.5\r\n            c-1.3-0.2-2.7-0.3-4-0.3c-12.4,0-22.9,8.9-24.8,21.2l-9.4,59.8c-0.3,1.7-1.3,3.1-2.8,3.9l-54,27.4c-6,3-10.4,8.2-12.5,14.6\r\n            c-2.1,6.4-1.5,13.2,1.5,19.2l27.5,53.9c0.8,1.5,0.8,3.3,0,4.8l-27.5,53.9c-3.1,6-3.6,12.8-1.5,19.2c2.1,6.4,6.5,11.6,12.5,14.6\r\n            l54,27.4c1.5,0.8,2.6,2.2,2.8,3.9l9.4,59.8c1.9,12.3,12.4,21.2,24.8,21.2c1.3,0,2.7-0.1,4-0.3l59.8-9.5c1.7-0.3,3.4,0.3,4.6,1.5\r\n            l42.8,42.8c4.7,4.8,11.1,7.4,17.8,7.4s13-2.6,17.8-7.4l42.8-42.8c1.2-1.2,2.9-1.8,4.6-1.5l59.8,9.5c1.3,0.2,2.7,0.3,4,0.3\r\n            c12.4,0,22.9-8.9,24.8-21.2l9.4-59.8c0.3-1.7,1.3-3.1,2.8-3.9l54-27.4c6-3,10.4-8.2,12.5-14.6s1.5-13.2-1.5-19.2l-27.5-53.9\r\n            c-0.8-1.5-0.8-3.3,0-4.8L475.214,188.1z M430.014,255.8l27.5,53.9c0.6,1.3,0.8,2.7,0.3,4.1c-0.4,1.4-1.4,2.5-2.7,3.1l-54,27.4\r\n            c-7.2,3.6-12.2,10.6-13.4,18.5l-9.4,59.8c-0.4,2.8-3.2,4.9-6.1,4.4l-59.8-9.5c-1.3-0.2-2.6-0.3-4-0.3c-6.7,0-13,2.6-17.8,7.4\r\n            l-42.5,42.8c-2,2-5.5,2-7.5,0l-42.8-42.8c-4.7-4.7-11.2-7.4-17.8-7.4c-1.3,0-2.7,0.1-4,0.3l-59.8,9.5c-2.9,0.5-5.7-1.6-6.1-4.4\r\n            l-9.4-59.8c-1.2-7.9-6.3-14.9-13.4-18.5l-54-27.4c-1.3-0.6-2.2-1.7-2.7-3.1c-0.4-1.4-0.3-2.8,0.3-4.1l27.5-53.9\r\n            c3.7-7.2,3.7-15.7,0-22.9l-27.5-53.9c-0.6-1.3-0.8-2.7-0.3-4.1c0.4-1.4,1.4-2.5,2.7-3.1l54-27.4c7.2-3.6,12.2-10.6,13.4-18.5\r\n            l9.4-59.8c0.4-2.8,3.2-4.9,6.1-4.4l59.8,9.5c1.3,0.2,2.6,0.3,4,0.3l0,0c6.7,0,13-2.6,17.8-7.4l42.7-42.7c2-2,5.5-2,7.5,0\r\n            l42.8,42.8c4.7,4.8,11.1,7.4,17.8,7.4c1.3,0,2.7-0.1,4-0.3l59.8-9.5c2.9-0.5,5.6,1.6,6.1,4.4l9.4,59.8c1.2,7.9,6.3,14.9,13.4,18.5\r\n            l54,27.4c1.3,0.6,2.2,1.7,2.7,3.1s0.3,2.8-0.3,4.1l-27.5,53.9C426.414,240.1,426.414,248.7,430.014,255.8z\"/>\r\n          <path d=\"M322.514,184.7h-44.1v-30.6c0-16.2-4.9-28-14.6-35.1c-14.9-11-34.4-5.3-36.6-4.6\r\n            c-4.1,1.3-6.9,5.1-6.9,9.4v39.1c0,27.5-32.8,37.2-34.1,37.6c-0.7,0.2-1.4,0.5-2,0.8c-3.3-2.4-7.3-3.9-11.7-3.9h-28.3\r\n            c-10.8,0-19.5,8.8-19.5,19.5v97.7c0,10.8,8.8,19.5,19.5,19.5h28.3c4.8,0,9.2-1.8,12.7-4.7c6.2,5.1,14,8.2,22.6,8.2h95.8\r\n            c23.2,0,38.7-12.8,41.4-34.2l12.9-81.8c0.1-0.5,0.1-1,0.1-1.5C358.014,200.6,342.114,184.7,322.514,184.7z M172.314,314.5h-27.8\r\n            v-97.2h27.8V314.5z M325.514,300.7c0,0.1,0,0.2,0,0.3c-0.6,4.6-2.1,17-21.8,17h-95.8c-8.7,0-15.8-7.1-15.8-15.8v-82.7\r\n            c5.6-1.7,48-15.8,48-56.5v-30.8c4-0.2,8.7,0.3,12,2.8c4.3,3.2,6.4,9.6,6.4,19.1v40.5c0,5.5,4.4,9.9,9.9,9.9h54\r\n            c8.5,0,15.4,6.7,15.7,15.1L325.514,300.7z\"/>\r\n        </g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n      <g>\r\n      </g>\r\n    </svg>\r\n  </p>\r\n\r\n  <article class=\"film-body\">\r\n    <img src=\"{{film.poster_path}}\" tabindex=\"0\">\r\n    <article class=\"film-info\">\r\n      <p>{{film.overview}}</p>\r\n      <p>{{cms.release}}: {{film.release_date}}</p>\r\n      <article class=\"genres\" *ngIf=\"film.genres.length\">\r\n        <p>{{cms.genres}}: </p>\r\n        <ul>\r\n          <li *ngFor=\"let genre of film.genres\">\r\n            <a href=\"genres/{{genre.id}}/page/1\">{{genre.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </article>\r\n    </article>\r\n  </article>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<loader *ngIf=\"isEmptyCollection\" [title]=\"'collection information'\"></loader>\r\n<section *ngIf=\"!isEmptyCollection\">\r\n  <p class=\"title\">{{collection.name}}</p>\r\n  <div>\r\n    <img src=\"https://image.tmdb.org/t/p/original{{collection.backdrop_path}}\">\r\n  </div>\r\n  <p class=\"subtitle\">{{cms.overview}} : </p>\r\n  <p class=\"overview\">{{collection.overview}}</p>\r\n  <film-item *ngFor=\"let film of collection.parts\" [film]=\"film\"></film-item>\r\n</section>\r\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<p class=\"total-results\">{{cms.totalMovies}} : <span>{{totalResults}}</span></p>\r\n\r\n<loader *ngIf=\"films.length === 0 && totalResults > 0\" [title]=\"title +' films'\"></loader>\r\n\r\n<p class=\"no-movies\" *ngIf=\"title === 'favorite' && totalResults === 0\">\r\n  {{cms.warning_1}} <span>{{title}}</span> {{cms.warning_1_1}}.\r\n  <br>\r\n  {{cms.warning_2}} <img src=\"./assets/img/like.png\" /> {{cms.warning_2_1}}.\r\n</p>\r\n\r\n<p class=\"no-movies\" *ngIf=\"title === 'search' && totalResults === 0\">\r\n  {{cms.warning_3}} <span>\" {{query}} \"</span> {{cms.warning_3_1}}.\r\n</p>\r\n\r\n<ul>\r\n  <li *ngFor=\"let film of films\">\r\n    <film-item [film]=\"film\"></film-item>\r\n  </li>\r\n</ul>\r\n\r\n<nav *ngIf=\"totalPages && totalPages != 0\">\r\n  <ul>\r\n    <li (click)=\"setPage(1)\" [ngClass]=\"{'active' : activePage === 1 }\">\r\n      1\r\n    </li>\r\n    <li class=\"many-pages\" *ngIf=\"showFirstPart\">\r\n      ...\r\n    </li>\r\n    <li *ngFor=\"let page of possiblePages\" (click)=\"setPage(page)\" [ngClass]=\"{'active' : activePage === page}\">\r\n      {{page}}\r\n    </li>\r\n    <li class=\"many-pages\" *ngIf=\"showSecondPart\">\r\n      ...\r\n    </li>\r\n    <li (click)=\"setPage(totalPages)\" [ngClass]=\"{'active' : activePage === totalPages}\">\r\n      {{totalPages}}\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\r\n\r\n</div>\r\n\r\n<p>{{cms.loading}} {{title}}...</p>\r\n"

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_constants__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = /** @class */ (function () {
    function RequestService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.films = [];
        switch (this.storage.getLanguage()) {
            case 'English':
                this.lang = __WEBPACK_IMPORTED_MODULE_1__shared_constants__["a" /* langEn */];
                break;
            case 'Russian':
                this.lang = __WEBPACK_IMPORTED_MODULE_1__shared_constants__["b" /* langRu */];
                break;
            default:
                this.lang = __WEBPACK_IMPORTED_MODULE_1__shared_constants__["a" /* langEn */];
                break;
        }
    }
    RequestService.prototype.uploadGenres = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/genre/movie/list?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadList = function (filter, page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/movie/" + filter + "?page=" + page + "&" + this.lang + "&region=RU&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadFilm = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/movie/" + id + "?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadVideos = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/movie/" + id + "/videos?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadCollection = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/collection/" + id + "?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadSimilarFilms = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/movie/" + id + "/recommendations?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadByGenre = function (id, page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/genre/" + id + "/movies?page=" + page + "&sort_by=created_at.asc&" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.findFilms = function (key, page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/search/movie?query=" + key + "&page=" + page + "&" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadCredits = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_constants__["c" /* url */] + "/movie/" + id + "/credits?" + this.lang + "&" + __WEBPACK_IMPORTED_MODULE_1__shared_constants__["d" /* apiKey */])
            .toPromise();
    };
    RequestService.prototype.uploadFavorites = function (mass) {
        var _this = this;
        this.films = [];
        for (var i = 0; i < mass.length; i++) {
            this.uploadFilm(mass[i])
                .then(function (res) { return _this.films.push(res.json()); });
        }
        return this.films;
    };
    RequestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], RequestService);
    return RequestService;
    var _a, _b;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/request.service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__films_collection_component_films_collection_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__film_item_component_film_item_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__film_detail_component_film_detail_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loader_component_loader_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_request_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_storage_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_safe_pipe__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__films_collection_component_films_collection_component__["a" /* FilmsCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__film_item_component_film_item_component__["a" /* FilmItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__film_detail_component_film_detail_component__["a" /* FilmDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__loader_component_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_safe_pipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'favorite/page/:page', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'search/:query/page/:page', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'genres/:genreId', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'genres/:genreId/page/:page', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: ':filter', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: ':filter/page/:page', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'top_rated', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'latest', component: __WEBPACK_IMPORTED_MODULE_7__films_list_component_films_list_component__["a" /* FilmsListComponent */] },
                    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_9__film_detail_component_film_detail_component__["a" /* FilmDetailComponent */] },
                    { path: 'collection/:id', component: __WEBPACK_IMPORTED_MODULE_6__films_collection_component_films_collection_component__["a" /* FilmsCollectionComponent */] },
                    { path: '', pathMatch: 'full', redirectTo: 'popular/page/1' }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_12__services_storage_service__["a" /* StorageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/MY_GITHUB/movies/src/app.module.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.bundle.map