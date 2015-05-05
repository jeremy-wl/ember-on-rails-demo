Ember Demo App on Rails
============

A simple Ember App running on Rails server

## Setting up the App locally:
1. `$ git clone git@github.com:jeremylinlin/ember-on-rails-demo.git; cd ember-on-rails-demo`
2. `$ bundle install` to install all the Ruby gem dependencies.
3. `$ rails s` to start your local Rails server
4. Check out the App on [http://localhost:3000/](http://localhost:3000/)

**Check out to "load-records-locally" branch to load all the records locally if the Ajax call fails due to connection problems.**

## Alternatively, you may [click here](http://ember--demo.herokuapp.com/) for the Heroku-deployed App.

## Notice:
The App makes an Ajax call to Odata whose connection may be unavailable in China. 
Fire up your proxy server or VPN connection if necessary, or it could simply return a blank page.
