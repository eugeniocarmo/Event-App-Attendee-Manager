
import * as React from 'react-native';

import {Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';


export function Home() {

  const participants = ['Eugenio', 'Daniela', 'Nicholas','Hannah','Eduardo', 'Deisy','Izabel', 'Louise', 'John'];

  function handleAddingParticipant(){
    console.log('Participant added');
  }

  function handdleRemovingParticipant(name: string) {
    console.log(`Participant ${name} was removed successfully`);
  }

  return (

    <View style={styles.container}>
      
      <Text style={styles.eventName}>
        Event Name
      </Text>
      <Text style={styles.eventDate}>
        Wednesday, May 24th 2023
      </Text>

      <View style={styles.form} >
        <TextInput 
        style={styles.input}
        placeholder="Enter event name"
        placeholderTextColor="#6b6b6b" 
        keyboardType='default'
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddingParticipant}
        >
          <Text
            style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item}
              onRemove={() => handdleRemovingParticipant(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Did anyone show up to the event yet? Make sure to jot down the people coming on your list!
          </Text>
        )}
      />
    </View>
    
    
  );
} 


