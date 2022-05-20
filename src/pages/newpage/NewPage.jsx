import React from 'react'
import '../../css/Style.css'
import '../../css/blog.css'
import './newpage.css'

export default function NewPage() {
  return (
    <div class='container'>
        <main className="blog">
            <img
                className="writeImg"                
                src="https://cdn.sanity.io/images/92ui5egz/production/9e0c9995ae8c93e99754f367c7c4572d129052dd-1440x810.jpg?w=1440&h=810&auto=format"
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} />
                <input
                    className="writeInput"
                    placeholder="Title"
                    type="text"
                    autoFocus={true}
                />
                </div>
                <div className="writeFormGroup">
                <textarea
                    className="writeInput writeText"
                    placeholder="Tell your story..."
                    type="text"
                    autoFocus={true}
                />
                </div>
                <button className="writeSubmit" type="submit">
                Publish
                </button>
            </form>
        </main>
    </div>
  )
}
