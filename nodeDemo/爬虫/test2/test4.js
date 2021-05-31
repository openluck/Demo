/*
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-31 10:54:40
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-31 10:54:53
 */
const express = require('express'); //搭建服务
const events = require('events'); //事件监听
const request = require('request'); //发送请求
const iconv = require('iconv-lite'); //网页解码
const cheerio = require('cheerio'); //网页解析
const MongoClient = require('mongodb').MongoClient; //数据库
const app = express(); //服务端实例
const Event = new events.EventEmitter(); //事件监听实例
const dbUrl = "mongodb://localhost:27017/"; //数据库连接地址
