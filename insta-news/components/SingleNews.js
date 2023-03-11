import {
    Dimensions,
    Image,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
import React, { useContext } from 'react';
import { NewsContext } from "../API/Context";
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({item,index}) => {

    const {darkTheme} = useContext(NewsContext);

    function speechFunction(){
      const thingToSay = item.title 
      const thingToSay2 = item.description
      const readMore = "Read more by clicking the link below ";
      Speech.speak(thingToSay);
      Speech.speak(thingToSay2);
      Speech.speak(readMore);
    }
  return (
    <View style={{height:windowHeight,
    width:windowWidth,
    transform: [{ scaleY:-1}],}}
    >

    <Image 
    source={{uri: item.urlToImage}}
    style={{height:"45%",resizeMode:"cover",width:windowWidth,}}
    />
    <View style={{...styles.description,backgroundColor:darkTheme? '#282C35':'white'}}>
    <Text style={{...styles.title,color:darkTheme? 'white':'black'}}>{item.title}

    </Text>
    <TouchableOpacity onPress={speechFunction}>
    <Ionicons name="md-volume-high-outline" size={24} color="black" />
    </TouchableOpacity>
      <Text style={{...styles.content,color:darkTheme? 'white':'black'}}>
      {item.description}
      </Text>
      <Text style={{color:darkTheme? 'white':'black'}}>
          Short By: 
          <Text>
        {item.author ?? "unknown"}
          </Text>
        </Text>
        </View>
          <ImageBackground 
          blurRadius={30}
          style={styles.footer}
            source={{uri: item.urlToImage}}
          >
            <TouchableOpacity onPress={()=> Linking.openURL(item.url)}>
                <Text style={{fontSize:15,color:'white'}}>
                '{item?.content?.slice(0,45)}...'

                </Text>
                <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>
                Read More
                </Text>
            </TouchableOpacity>
          </ImageBackground>
    </View>
   
  );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,

    },
    content:{
        fontSize: 18,
        paddingBottom: 10,
    },

    description:{
        padding: 15,
        flex:1,
    },
    footer: {
        height: 60,
        width: windowWidth,
        position: "absolute",
        bottom: 0,
        backgroundColor: '#d7be69',
        justifyContent:'center',
        paddingHorizontal:20,
    }
})

export default SingleNews;
