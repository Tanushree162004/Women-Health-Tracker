 function showForm() {
            document.getElementById('greeting').classList.add('hidden');
            document.getElementById('form-section').classList.remove('hidden');
        }

        function calculateBodyFat() {
            const age = document.getElementById('age').value;
            const weight = document.getElementById('weight').value;
            const height = document.getElementById('height').value;
            const cycleLength = document.getElementById('cycle-length').value;
            const lastPeriod = document.getElementById('last-period').value;

            if (age && weight && height && cycleLength && lastPeriod) {
                // Simplified body fat percentage calculation
                const bodyFatPercentage = (1.20 * (weight / ((height / 100) * (height / 100))) + (0.23 * age) - 5.4).toFixed(2);

                document.getElementById('bodyFatPercentage').innerText = `${bodyFatPercentage}%`;
                document.getElementById('result').classList.remove('hidden');

                const recommendations = document.getElementById('recommendations');
                recommendations.innerHTML = '';

                // Calculate the current phase of the menstrual cycle
                const today = new Date();
                const lastPeriodDate = new Date(lastPeriod);
                const daysSinceLastPeriod = Math.floor((today - lastPeriodDate) / (1000 * 60 * 60 * 24));
                const cycleDay = daysSinceLastPeriod % cycleLength;

                let phase;
                if (cycleDay < 7) {
                    phase = 'Menstrual Phase';
                } else if (cycleDay < 14) {
                    phase = 'Follicular Phase';
                } else if (cycleDay < 21) {
                    phase = 'Ovulation Phase';
                } else {
                    phase = 'Luteal Phase';
                }

                if (bodyFatPercentage < 18) {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">High Protein Diet</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Strength Training Exercises</li>`;
                } else if (bodyFatPercentage >= 18 && bodyFatPercentage <= 24) {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Balanced Diet</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Cardio and Strength Training</li>`;
                } else {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Low Carb Diet</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">High Intensity Interval Training (HIIT)</li>`;
                }

                recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Current Menstrual Phase: ${phase}</li>`;

                if (phase === 'Menstrual Phase') {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Focus on gentle exercises like yoga and pilates</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Increase iron-rich foods</li>`;
                } else if (phase === 'Follicular Phase') {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Increase intensity of workouts</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Focus on lean proteins and complex carbs</li>`;
                } else if (phase === 'Ovulation Phase') {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">High energy workouts like HIIT</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Maintain a balanced diet</li>`;
                } else if (phase === 'Luteal Phase') {
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Moderate intensity workouts</li>`;
                    recommendations.innerHTML += `<li class="bg-gray-100 p-2 rounded mb-2">Focus on magnesium-rich foods</li>`;
                }
            } else {
                alert('Please fill in all fields');
            }
        }