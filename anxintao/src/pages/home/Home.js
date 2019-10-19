import React from 'react';
import {Text, View} from 'react-native';
import Image from 'react-native-fast-image';
import Swiper from "../../../node_modules/react-native-swiper";
import * as log from "../../utils/log";
import {deviceHeight, deviceWidth} from "../../utils/px";
import px from "../../utils/px";
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            banners:[],
            sources:[],
        }
    }

    componentDidMount() {
        this.setState({
            banners:[
                require('../../image/banner/banner1.jpg'),
                require('../../image/banner/banner2.jpeg'),
                require('../../image/banner/banner3.jpg')
            ],
            sources:[
                {
                    id:1,
                    name:'进店必买',
                    img:require('../../image/banner/banner2.jpeg')
                },
                {
                    id:2,
                    name:'币享尤物',
                    img:require('../../image/banner/banner2.jpeg')
                },
                {
                    id:3,
                    name:'人气排行',
                    img:require('../../image/banner/banner2.jpeg')
                },
                {
                    id:4,
                    name:'精选包税',
                    img:require('../../image/banner/banner2.jpeg')
                }
            ]
        })
    }
    render() {
        return (
            <View style={{flex:1, alignItems:'center'}}>
                <View
                    style={{height:px(240)}}
                >
                    <Swiper horizontal={true} autoplay={true} autoplayTimeout={1}
                    >
                        {
                            this.state.banners.map((item,i)=>{
                                return(
                                    <Image
                                        resizeMode={'stretch'}
                                        source={item}
                                        style={{width:deviceWidth,height:px(240)}}
                                    />
                                )
                            })
                        }
                    </Swiper>
                </View>

                <View
                    style={{
                        width:deviceWidth-32,
                        position:'absolute',
                        marginTop:px(210),
                        borderRadius:px(8),
                        height:px(100),
                        backgroundColor:'#fff',
                        elevation:6,
                        flexDirection:'row'
                    }}
                >
                    {
                        this.state.sources.map((item,index)=>{
                            return(
                                <View style={{
                                    width:(deviceWidth-32)/4,
                                    height:px(100),
                                    flexDirection:'column',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Image
                                        resizeMode={'stretch'}
                                        source={item.img}
                                        style={{width:px(60),height:px(60),borderRadius:px(30)}}
                                    />
                                    <Text style={{
                                        fontSize:px(10),
                                        color:'#999',
                                        marginTop:px(5)
                                    }}>{item.name}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

