import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import *as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';

let customFont = {
    'Bubblegum-Sans': require ("../assets/fonts/BubblegumSans-Regular.ttf")
}


export default class StoryCard extends React.Component {
    constructor(){
        super();
        this.state = {
            fontsLoaded: false
        }
    }

     async _loadFontsAsync(){
        await Font.loadAsync(customFont)
        this.setState({
            fontsLoaded: true
        })

    } 

    componentDidMount(){
        this._loadFontsAsync();
    }

    render(){
        if (!this.state.fontsLoaded){
            return <AppLoading />

        }

        else {
            return(
                <TouchableOpacity style = {styles.container} onPress = {()=>{
                    this.props.navigation.navigate("Story", {story: this.props.story})
                }}>
                    <SafeAreaView style = {{marginTop: 35}}/>
                    <View style = {styles.cardContainer}>
                        <Image source = {require("../assets/story_image_1.png")} style = {styles.imageStyle}/>
                        <View style = {styles.titleContainer}>
                            <Text style = {styles.titleText}>
                                {this.props.story.title}
                            </Text>

                            <Text style = {styles.authorText}>

                            {this.props.story.author}

                            </Text>

                            <Text style = {styles.descriptionText}>

                            {this.props.story.description}

                            </Text>

                        </View>

                        <View style = {styles.actionContainer}>
                            <View style = {styles.likeButton}>
                                <Ionicons 
                                name = {"heart"}
                                size = {RFValue(30)}
                                color = {"white"}
                                />
                                <Text style = {styles.likeText}>
                                    12k Likes
                                </Text>

                            </View>

                            
                        </View>

                    </View>

                </TouchableOpacity>
            );
            
        }
       
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,

    },

    cardContainer : {
        margin: RFValue(20),
        backgroundColor: "#2F345D",
        borderRadius: RFValue(30)

    },

    titleContainer : {
        paddingLeft: RFValue(20),
        justifyContent: 'center',


    },

    titleText : {
        fontSize: RFValue(20),
        fontFamily: 'Bubblegum-Sans',
        color: "white"


    },

    authorText: {
        fontSize: RFValue(12),
        fontFamily: 'Bubblegum-Sans',
        color: 'white'
    },

    descriptionText: {
        fontSize: RFValue(15),
        fontFamily: 'Bubblegum-Sans',
        color: 'white'
    },

    actionContainer : {
        padding: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    likeButton : {
        width: RFValue(180),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#EB3948",
        borderRadius: RFValue(30)
    },

    likeText: {
        color: "white",
        fontFamily: 'Bubblegum-Sans',
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },

    imageStyle : {
        width: "95%",
        resizeMode: 'contain',
        alignSelf: 'center',
        height: RFValue(220),
        marginTop: RFValue(20),
        marginBottom: RFValue(10)
    }
})