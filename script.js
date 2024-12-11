function simulateLink() {
  const modulationType = document.getElementById('modulation-type').value;
  const fiberLength = document.getElementById('fiber-length').value;
  const laserPower = document.getElementById('laser-power').value;
  const noiseLevel = document.getElementById('noise-level').value;

  let resultText = '';

  if (modulationType === 'direct') {
    resultText = `Simulating Direct Modulation...<br>
                  Fiber Length: ${fiberLength} km<br>
                  Laser Power: ${laserPower} mW<br>
                  Noise Level: ${noiseLevel} dB<br>
                  Performance: High nonlinearity, suitable for short-range links.`;
  } else {
    resultText = `Simulating External Modulation...<br>
                  Fiber Length: ${fiberLength} km<br>
                  Laser Power: ${laserPower} mW<br>
                  Noise Level: ${noiseLevel} dB<br>
                  Performance: Low nonlinearity, suitable for long-range links.`;
  }

  document.getElementById('simulation-result').innerHTML = resultText;

  updateChart(fiberLength, laserPower, noiseLevel);
  visualizeNetwork(modulationType);
}

function updateChart(fiberLength, laserPower, noiseLevel) {
  const ctx = document.getElementById('performanceChart').getContext('2d');

  if (window.performanceChart) {
    window.performanceChart.destroy();
  }

  window.performanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Fiber Length (km)', 'Laser Power (mW)', 'Noise Level (dB)'],
      datasets: [{
        label: 'RoF Performance Metrics',
        data: [fiberLength, laserPower, noiseLevel],
        backgroundColor: ['#004080', '#008080', '#800080'],
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function visualizeNetwork(modulationType) {
  const networkDiv = document.getElementById('network-visualization');

  if (modulationType === 'direct') {
    networkDiv.innerHTML = '<strong>3G Cellular Network:</strong><br>Simple structure with fewer base stations.';
  } else {
    networkDiv.innerHTML = '<strong>WCDMA Network:</strong><br>Complex structure with multiple base stations and micro-diversity.';
  }
}
