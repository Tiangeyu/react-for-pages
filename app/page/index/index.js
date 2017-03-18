/*
 題目：商品清單查詢
 1.預設顯示10筆商品圖示及商品名稱
 2.在輸入框輸入關鍵字並點擊查詢按鈕將顯示相關商品
 3.符合搜尋條件的商品名稱標記綠色字體
 不符合則不顯示任何商品，顯示查無相關商品文字標記紅色字體
 4.當輸入框清空點擊查詢按鈕時，將顯示全部商品
 */
// css公共样式
require("../../lib/reset.css");
require("../../lib/comm.js");
require("./index.css");

import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/header";
import HeadSe from "./headSe.js";

import $ from 'jquery';



class SearchProduct extends React.Component{
    constructor(props){
        super(props);
        this.title = "我的移动生活";
       
    }
    componentDidMount () {
       $.ajax({
        // 吊 post也能取出来，现在好开发了 数据方面没有任何限制了
            type:"POST",
            dataType : 'json',
            url : this.props.source,
            success : function(data){
                console.log(data)
            }
       })
    };


    render(){
        return(
            <div>
                <Header title={this.title} />
                <HeadSe></HeadSe>
            </div>
        );
    }
}

// 此处踩过的坑，一上午都爬不出来 好痛
// source对应的是相对路径，因为都是在服务器上，只是端口号不同
ReactDOM.render(<SearchProduct source='../bussDistrict.do?actionType=superDistricts'/>,document.getElementById('main'));