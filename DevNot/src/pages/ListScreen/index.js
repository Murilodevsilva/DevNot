import React, { useLayoutEffect } from "react";
import {
    Container,
    AddButton,
    AddButtonImage,
    NoteList
} from './style';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import NoteItem from "../../components/NoteItem";


export default ()=>{
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list)

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:'Suas notas',
            headerRight: ()=> (
                <AddButton underlayColor='transparent' onPress={()=>navigation.navigate('EditNote')}>
                    <AddButtonImage source={require('../../assets/more.png')}/>
                </AddButton>
            )
        })
    })
const handleNotePress = ()=>{

}
    return(
    <Container>
        <NoteList
        data={list}
        renderItem={(item, index)=>(
            <NoteItem
            data={item}
            index={index}
            onPress={handleNotePress}
            />
        )}
        keyExtractor={(item, index)=>index.toString()}
        />
    </Container>
    );
}