import { useEffect, useState } from "react";

const EVENTS = {
	DragEnter: "dragenter",
	DragOver: "dragover",
	DragLeave: "dragleave",
	Drop: "drop",
};

function useDragAndDropUploader(dropAreaRef, handleFiles, handleFilesDependencies) {
	const [isDropAreaHovered, setIsDropAreaHovered] = useState(false);
	useEffect(() => {
		const dropArea = dropAreaRef.current;

		function preventDefaults(event) {
			event.preventDefault()
			event.stopPropagation()
		}

		function onEnterDropArea() {
			setIsDropAreaHovered(true);
		}

		function onLeaveDropArea() {
			setIsDropAreaHovered(false);
		}

		// Stop the events from bubbling up any higher than necessary.
		[EVENTS.DragEnter, EVENTS.DragOver, EVENTS.DragLeave, EVENTS.Drop].forEach((eventName) => {
			dropArea.addEventListener(eventName, preventDefaults, false);
		});

		// Track drag/drop enter state.
		[EVENTS.DragEnter, EVENTS.DragOver].forEach((eventName) => {
			dropArea.addEventListener(eventName, onEnterDropArea, false);
		});

		// Track drag/drop leave state.
		[EVENTS.DragLeave, EVENTS.Drop].forEach((eventName) => {
			dropArea.addEventListener(eventName, onLeaveDropArea, false);
		});

		return () => {
			// Stop the events from bubbling up any higher than necessary.
			[EVENTS.DragEnter, EVENTS.DragOver, EVENTS.DragLeave, EVENTS.Drop].forEach((eventName) => {
				dropArea.removeEventListener(eventName, preventDefaults);
			});

			// Track drag/drop enter state.
			[EVENTS.DragEnter, EVENTS.DragOver].forEach((eventName) => {
				dropArea.removeEventListener(eventName, onEnterDropArea);
			});

			// Track drag/drop leave state.
			[EVENTS.DragLeave, EVENTS.Drop].forEach((eventName) => {
				dropArea.removeEventListener(eventName, onLeaveDropArea);
			});
		};
	}, [...handleFilesDependencies]);

	useEffect(() => {
		const dropArea = dropAreaRef.current;

		function onDropFiles({ dataTransfer: { files } }) {
			if (files && files.length) {
				handleFiles(files);
			}
		}

		// Handle dropped files.
		dropArea.addEventListener(EVENTS.Drop, onDropFiles, false);

		return () => {
			dropArea.removeEventListener(EVENTS.Drop, onDropFiles);
		};
	}, [...handleFilesDependencies]);

	return isDropAreaHovered;
}

export default useDragAndDropUploader;
