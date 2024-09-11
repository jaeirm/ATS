        
        function toggleStatus(element) {
            // Get current present and absent counts
            let presentCount = parseInt(document.getElementById('presentCount').innerText);
            let absentCount = parseInt(document.getElementById('absentCount').innerText);

            // Toggle status between present and absent
            if (element.classList.contains('status-present')) {
                element.classList.remove('status-present');
                element.classList.add('status-absent');
                element.innerText = 'ABSENT';
                // Update the count
                presentCount--;
                absentCount++;
            } else {
                element.classList.remove('status-absent');
                element.classList.add('status-present');
                element.innerText = 'PRESENT';
                // Update the count
                presentCount++;
                absentCount--;
            }

            // Update the count in the UI
            document.getElementById('presentCount').innerText = presentCount;
            document.getElementById('absentCount').innerText = absentCount;
        }
