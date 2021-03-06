import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { Router, RouterEmit } from 'tarojs-router'
import './index.css'

@RouterEmit
export default class App extends Component {
  state = {
    params: null,
    data: null,
  }

  componentDidShow() {
    this.setState({
      params: getCurrentInstance().router?.params,
      data: Router.getData(),
    })
  }

  render() {
    return (
      <View>
        <View>上一个页面带来的参数：</View>
        <View>{JSON.stringify(this.state.params)}</View>

        <View>上一个页面带来的数据：</View>
        <View>{JSON.stringify(this.state.data)}</View>

        <Button
          onClick={() => {
            Router.backData({ name: '我是数据' })
          }}
        >
          返回并携带数据
        </Button>
        <Button
          onClick={() => {
            Router.backError(Error('异常异常'))
          }}
        >
          返回并抛出异常
        </Button>
        <Button
          onClick={() => {
            Router.back()
          }}
        >
          返回不带数据
        </Button>
      </View>
    )
  }
}
