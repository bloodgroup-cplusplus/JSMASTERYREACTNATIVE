import { useState } from "react"
import {View,ScrollView,SafeAreaView} from "react-native"
import {Stack,useRouter} from "expo-router"
// similar to react-router 

import {COLORS,icons,images,SIZES} from "../constants"

// import components 

import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "../components"



const Home = () =>{
    const router=useRouter();
    // start creeating our router
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>

                ),
                headerTitle: ""
            }}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex:1,
                        padding:SIZES.medium
                    }}>
                        <Welcome
                        
                        
                        />

                        <Popularjobs/>
                        <Nearbyjobs/>
                        
                    </View>
                </ScrollView>

        </SafeAreaView>
    )
}


export default Home