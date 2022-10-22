import React, { useState } from "react"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import LinearProgress from "@mui/material/LinearProgress"
import { v4 as uuidv4 } from "uuid"
import { ref, uploadBytesResumable } from "firebase/storage"
import { db, storage } from "./firebase"
import { collection, addDoc } from "firebase/firestore"

function Etube(props) {
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const handleChange = (file) => {
		let fileRef = ref(storage, file.name)
		const uploadTask = uploadBytesResumable(fileRef, file)

		uploadTask.on("state_changed", (snapshot) => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
			console.log("Upload is " + progress + "%done")
		})
		// setLoading(false);
	}

	return (
		<div style={{ marginTop: "5rem", marginBottom: "1rem" }}>
			{error != "" ? (
				<Alert severity="error">{error}</Alert>
			) : (
				<>
					<input
						type="file"
						onChange={(e) => handleChange(e.target.files[0])}
						id="upload-input"
						style={{ display: "none" }}
					/>
					<label htmlFor="upload-input">
						<Button
							variant="outlined"
							color="secondary"
							component="span"
							disabled={loading}
						>
							&nbsp;Upload Video
						</Button>
					</label>
					{loading && (
						<LinearProgress color="secondary" style={{ marginTop: "3%" }} />
					)}
				</>
			)}
		</div>
	)
}

export default Etube
