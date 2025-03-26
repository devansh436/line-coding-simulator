const descriptions = {
  "NRZ-I": `<p>Non-Return to Zero Inverted (NRZ-I) is a line coding method where a transition occurs only on a '1' bit, while '0' bits maintain the previous state. <br>It is assumed here that the last non-zero level was positive.</p>
  <ul>
    <li>Bit '0': No transition (Maintains previous voltage)</li>
    <li>Bit '1': Voltage transition (Inverts state)</li>
  </ul>`,

  "NRZ-L": `<p>Non-Return to Zero Level (NRZ-L) represents '1's and '0's using different voltage levels. The voltage remains constant throughout the bit interval.</p>
  <ul>
    <li>Bit '0': High voltage</li>
    <li>Bit '1': Low voltage</li>
  </ul>`,

  "RZ": `<p>Return to Zero (RZ) is a line coding technique where the signal returns to zero voltage between each bit, providing clear bit separation.</p>
  <ul>
    <li>Bit '0': Low voltage (Returns to zero within the bit period)</li>
    <li>Bit '1': High voltage followed by return to zero</li>
  </ul>`,

  "Manchester": `<p>Manchester encoding ensures synchronization by introducing a transition in the middle of each bit.</p>
  <ul>
    <li>Bit '0': High-to-Low transition at the midpoint</li>
    <li>Bit '1': Low-to-High transition at the midpoint</li>
  </ul>`,

  "AMI": `<p>AMI is a bipolar coding scheme where binary '1's alternate between positive and negative voltages, and '0's are represented by zero voltage.<br>It is assumed here that previous non-zero voltage was positive.</p>
  <ul>
    <li>Bit '0': 0V (Zero voltage)</li>
    <li>Bit '1' -> Previous non-zero positive -> LOW voltage</li>
    <li>Bit '1' -> Previous non-zero negative &nbsp-> HIGH voltage</li>
  </ul>`,

  "MLT-3": `<p>MLT-3 uses three voltage levels in a cyclic pattern to reduce bandwidth requirements while maintaining data integrity.<br> It is assumed here that previous non-zero level was positive and previous bit was 0.</p>
  <ul>
    <li>Bit '0': No change from the previous voltage level</li>
    <li>Bit '1' -> Previous level was positive/negative -> 0V </li>
    <li>Bit '1' -> Previous level was zero &nbsp-> Invert last non-zero voltage</li>
  </ul>`
};

export default descriptions;
