const descriptions = {
    "NRZ": "Non-Return to Zero (NRZ) is a simple line coding scheme where the voltage level remains constant during the bit interval. A '1' is represented by one voltage level, and a '0' is represented by another. It is efficient but lacks synchronization and may suffer from baseline wander.",
    
    "Manchester": "Manchester encoding combines clock and data signals using an XOR operation. Each bit has a transition in the middle of the bit period: a '0' is represented by a high-to-low transition, and a '1' is represented by a low-to-high transition. It ensures synchronization but requires double the bandwidth.",
    
    "AMI": "Alternate Mark Inversion (AMI) is a bipolar line coding scheme where '0's are represented by zero voltage, while '1's alternate between positive and negative voltages. This eliminates DC bias and provides error detection capabilities.",
    
    "MLT-3": "Multi-Level Transmit 3 (MLT-3) uses three voltage levels (positive, zero, and negative) to represent data. It transitions between levels in a cyclic manner, reducing bandwidth usage compared to NRZ while maintaining synchronization."
  };
  
  export default descriptions;
  