(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";$(document).ready(function(){$(".search-container").fadeIn(1e3);function getArticles(string){$.ajax({url:"https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+string,dataType:"jsonp",success:function success(response){console.log(response);$("#articles").html("").show();response.query.search.forEach(function(obj){var article=articleMaker(obj.title,obj.snippet);$("#articles").append(article)});for(var i=0,x=$(".article").length;i<x;i++){(function(i){setTimeout(function(){$(".article")[i].style.opacity="1"},100*i)})(i)}}})}function articleMaker(title,snippet){var article='<div class="article">'+'<a href="https://en.wikipedia.org/wiki/'+title+'"target="_blank">'+"<h3>"+title+"</h3>"+'<p>"...'+snippet+'..."</p>'+"</a>"+"<div>";return article}$("#search").on("keydown",function(event){if(event.keyCode===13){$("#articles").fadeOut(200,function(){getArticles($("#search").val());$("#search").val("")})}})})},{}]},{},[1]);