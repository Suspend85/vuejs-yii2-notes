<template>
 <div class="tc-notes-wrapper">
    <add-new-button @addNote="addNote"/>
   <div v-if="notes.length !== 0" class="tc-notes">
     <note
         v-for="(note, index) in notes"
         :key="index"
         :note="note"
         @deleteNote="deleteNote"
         @noteUpdated="noteUpdated"
     />
   </div>
   <div class="tc-notes" v-else>
     <h3>Notes is empty. Try to add first.</h3>
   </div>
 </div>
</template>

<script>

import Note from './Note';
import AddNewButton from './AddNewButton';

export default {
  name: "Notes",
  components: { Note, AddNewButton },
  data() {
    return {
      notes: [
        {
          title: 'sunt aut facere repellat',
          body: 'uia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          title: 'nesciunt quas odio',
          body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est'
        },
        {
          title: 'This is a demo note',
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
        },
      ]
    }
  },
  methods: {
    addNote() {
      this.notes.unshift({title: '', body: ''})
    },
    deleteNote(note){
      this.notes.splice(this.notes.indexOf(note), 1);
    },
    noteUpdated(note){
      console.log(note);
    }
  }
};
</script>

<style lang="scss" scoped>
.tc-notes-wrapper {
  padding: 20px 0 ;
  .tc-notes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
</style>