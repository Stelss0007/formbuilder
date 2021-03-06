(function (global) {
  System.config({
    paths: {
      // псевдоним для пути к модулям
      'npm:': 'node_modules/'
    },
    // указываем загрузчику System, где искать модули
    map: {
      // наше приложение будет находиться в папке app
      app: 'app',
      // пакеты angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // остальные пакеты
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ng2-dnd': 'node_modules/ng2-dnd/bundles/index.umd.js',
      'ng2-tabs': 'node_modules/ng2-tabs',
      'angular2-color-picker': 'node_modules/angular2-color-picker',
    },
    // пакеты, которые указывают загрузчику System, как загружать файлы без имени и расширения
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      "ng2-tabs": { "main": "index.js", "defaultExtension": "js" },
      'angular2-color-picker': {main:'index.js', defaultExtension: 'js'},
    }
  });
})(this);