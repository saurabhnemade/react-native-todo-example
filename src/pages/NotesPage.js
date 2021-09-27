import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import {
  Button, Text, TextInput,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

const NotesPage = () => {
  const dispatch = useDispatch();
  const [noteText, setNoteText] = React.useState('');
  const notes = useSelector((state) => state.notes.list || []);

  const onAdd = () => {
    dispatch({
      type: 'ADD_NOTE',
      noteText,
    });
    setNoteText('');
  };

  const onDelete = (index) => {
    dispatch({
      type: 'REMOVE_NOTE',
      index,
    });
  };

  return (
    <SafeAreaView>
      <TextInput placeholder="Enter note here" value={noteText} onChangeText={setNoteText} multiline numberOfLines={4} />
      <Button onPress={onAdd}>Add</Button>
      <FlatList
        data={notes}
        renderItem={(p) => (
          <View style={{
            flexDirection: 'row',
            paddingTop: 5,
            paddingBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            paddingHorizontal: 16,
          }}
          >
            <View style={{ flex: 1 }}>
              <Text>{p.item}</Text>
            </View>
            <View style={{ width: 50 }}>
              <Text style={{ color: 'red' }} onPress={() => onDelete(p.index)}>Delete</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NotesPage;
