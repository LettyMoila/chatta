import react, { useEffect, useState } from "react";
import { View, TextInput, Text, Button } from "react-native-web";

export default function HomeScreen(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [book, setBook] = useState(['The secret', 'The are of war'])

    const addBook = (title)=>{
        setBook(book => {
            return [...book, title.trim()]
        })
    }
    const clearState = () =>{
        setName('');
        setAge(0);
        setBook['The secret', 'The are of war'];
    }
    const removeBook = (index) =>{
        if(book[index]){
        const newBook = [...book];
        newBook.splice(index, 1)
        setBook(newBook)
    }
    }
    useEffect(()=>{
        console.log(name);
    }, [name])
    useEffect(()=>{
        console.log(age);
    }, [age])
    useEffect(()=>{
        console.log(book);
    }, [book])

    return (
        <view>
            {
                book.map(item =>{
                    return(<Text>{item}</Text>)
                })
            }
            <TextInput
            style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
            onChange={(ev) => setName(ev.target.value)}
            />
            <TextInput
            style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
            onChange={(ev) => setAge(ev.target.value)}
            />
            <TextInput
            style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
            onBlur={(ev) => addBook(ev.target.value)}
            />
            <TextInput
            style={{borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
            onBlur={(ev) => removeBook(ev.target.value)}
            />
            <Button
            style={{background: 'blue', color: '#fff'}}
            onPress={() => {clearState()}}
            title='clear fields'/>
        </view>
    )
}

