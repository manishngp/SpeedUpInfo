import { memo, useState } from "react"


const  Notecard = memo(function Notecard({note, onDelete, onEdit}){
    const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.discription);

   const handleSave = () => {
    onEdit(note.id, { title: editTitle, discription: editContent });
    setIsEditing(false);
  };

  return (
    <div style={{
      border:  "1px solid #333",
      borderRadius: 8, 
      padding: 16,
    
    }}>
      {isEditing ? (
        <>
          <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <textarea value={editContent} onChange={e => setEditContent(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{note.title}</h1>
          <p>{note.discription}</p>         
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
});

export default Notecard