import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');

    // A submit handler still needs to be defined, since it is not part
    // of the state.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        // we can call the name directly, since that variable was
                        // returned back to us by the useState hook.
                        value={name}
                        // to change the state we use an arrow function that
                        // takes the event as a parameter. The function returns a
                        // call to setName passing in event.target.value, which will
                        // update the state for us.
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                        }
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={comments}
                        onChange={
                            (e) => setComments(e.target.value)
                        }
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks