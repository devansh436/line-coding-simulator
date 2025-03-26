const descriptions = {
  "NRZ-I": `<p><b>Non-Return to Zero Inverted (NRZ-I)</b> is a line coding method used to represent binary data. It introduces transitions only on '1' bits, while '0' bits maintain the previous state. This encoding is useful for reducing transmission errors and ensuring synchronization in data streams. <br><b>Assumption:</b> It is assumed here that the last non-zero level was positive.</p>
  <ul>
    <li><b>Bit '0':</b> No transition (Maintains previous voltage level, aiding in simpler decoding)</li>
    <li><b>Bit '1':</b> Voltage transition (State inverts, making it easier to detect '1' bits)</li>
  </ul>`,

  "NRZ-L": `<p><b>Non-Return to Zero Level (NRZ-L)</b> uses distinct voltage levels to represent binary data. It maintains a constant voltage throughout each bit duration, which makes it simple to implement. However, it has no inherent error detection capability, making it unsuitable for noisy channels. <br><b>Assumption:</b> Voltage level is predefined for both bits.</p>
  <ul>
    <li><b>Bit '0':</b> High voltage (Represents a binary zero using a consistent high level)</li>
    <li><b>Bit '1':</b> Low voltage (Indicates a binary one using a low or negative level)</li>
  </ul>`,

  "RZ": `<p><b>Return to Zero (RZ)</b> is a line coding technique characterized by a return to zero voltage within each bit period. This ensures clear separation of bits, reducing the risk of synchronization errors. While it provides reliable transmission, it consumes more bandwidth than NRZ variants. <br><b>Assumption:</b> Voltage returns to zero halfway through each bit interval.</p>
  <ul>
    <li><b>Bit '0':</b> Low voltage (Returns to zero within the bit period, offering a distinct state separation)</li>
    <li><b>Bit '1':</b> High voltage followed by a return to zero (Provides clear visual distinction between bits)</li>
  </ul>`,

  "Manchester": `<p><b>Manchester encoding</b> is a self-clocking line coding method that introduces a transition in the middle of each bit. It offers synchronization advantages and error detection capabilities, making it suitable for network communications such as Ethernet. <br><b>Assumption:</b> Transitions occur at the midpoint of each bit interval.</p>
  <ul>
    <li><b>Bit '0':</b> High-to-Low transition at the midpoint (Provides clear distinction between bits)</li>
    <li><b>Bit '1':</b> Low-to-High transition at the midpoint (Ensures synchronization)</li>
  </ul>`,

  "AMI": `<p><b>Alternate Mark Inversion (AMI)</b> is a bipolar coding scheme that uses three voltage levels: positive, negative, and zero. Binary '1's alternate between positive and negative voltages, while binary '0's are represented by zero voltage. This method helps in error detection and reduces DC bias. <br><b>Assumption:</b> The previous non-zero voltage was positive.</p>
  <ul>
    <li><b>Bit '0':</b> 0V (No voltage, maintaining the balance of the signal)</li>
    <li><b>Bit '1':</b> Alternates between positive and negative voltage, ensuring clear differentiation from zeros</li>
    <li><b>Additional Rule:</b> The polarity of '1's is inverted compared to the previous non-zero voltage</li>
  </ul>`,

  "MLT-3": `<p><b>Multi-Level Transmit 3 (MLT-3)</b> uses three distinct voltage levels (-1, 0, +1) in a cyclic pattern. By limiting the number of transitions, it reduces bandwidth requirements while maintaining data integrity. It is commonly used in Gigabit Ethernet. <br><b>Assumption:</b> The previous non-zero level was positive, and the previous bit was '0'.</p>
  <ul>
    <li><b>Bit '0':</b> No change from the previous voltage level (Minimizes unnecessary transitions)</li>
    <li><b>Bit '1':</b> If the previous level was positive or negative, the voltage becomes 0V</li>
    <li><b>Bit '1':</b> If the previous level was zero, it inverts the last non-zero voltage</li>
  </ul>`
};

export default descriptions;