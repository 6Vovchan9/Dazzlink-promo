## Github pages

How to host angular app on github:
ng new dazzlink -> удаляем ранее созданный бандл, если есть (/dist или /docs) -> ng build --output-path docs --base-href /dazzlink/ -> create a new repository on github -> git init -> git remote add origin https://github.com/6Vovchan9/dazzlink.git -> git add . -> git commit -m "Project is added to github" -> git push -u origin develop -> далее на сайте github переходим в github pages настраиваем там Source.

И далее если хотим увидеть свежие изм в github pages то перед тем как пушить изм надо пересобрать проект при помощи команды "ng build ..."

## http-server

Чтоб протестировать собранное приложение (запустить файл index.html из папки docs) глобально должен быть установлен пакет npm install -g http-server далее удаляем ранее созданный бандл, если есть (/dist или /docs) -> собираем проект npm run build -> переходим в папку где лежит файл index.html (cd Desktop/myProject/dist/myProject/) и запускаем локальный сервер http-server -p 4200

## prettier

Чтобы отформатировать все файлы проекта с помощью Prettier (по правилам указанным в файле .prettierrc) исп команду:

First, install Prettier locally:
npm install --save-dev --save-exact prettier
And format all files with Prettier:
npx prettier . --write
(или скачать плагин для редактора кода, включить в настройках prettier как "Default formatter" и включить "Format on save")

## ssr

Server-side rendering (SSR) — это техника рендеринга веб-страниц на сервере перед отправкой их клиенту. Изза нее можно заметить такую неприятную вещь как например при прогрузке главной страницы сначала отображаются 3 иконки мобильных магазинов ("linkToApp") и только потом это перерастает в "downloadApp". Чтобы отключить эту технику надо в файле angular.json установить свойству projects['dazzlink-promo'].architect.build.configurations.development(production).ssr/prerender значение false
