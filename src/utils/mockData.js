export const generateTransactionLog = () => {
    const data = [];
    let currentTimestamp = new Date("2023-10-27T03:15:59"); 
    let txId = 99950;
    const nominals = ["Rp 25.000", "Rp 50.000", "Rp 50.000", "Rp 100.000", "Rp 150.000", "Rp 200.000"];
    const sources = ["E-Wallet (Dana)", "E-Wallet (OVO)", "E-Wallet (GoPay)", "Bank Transfer (BCA)", "Bank Transfer (BRI)", "Bank Transfer (Mandiri)"];
  
    for (let i = 0; i < 100; i++) {
      const subtractSeconds = Math.floor(Math.random() * 10) + 2;
      currentTimestamp.setSeconds(currentTimestamp.getSeconds() - subtractSeconds);
      const h = String(currentTimestamp.getHours()).padStart(2, '0');
      const m = String(currentTimestamp.getMinutes()).padStart(2, '0');
      const s = String(currentTimestamp.getSeconds()).padStart(2, '0');
      
      data.push({
        id: `TX-${txId--}`,
        waktu: `${h}:${m}:${s} WIB`,
        nominal: nominals[Math.floor(Math.random() * nominals.length)],
        sumber: sources[Math.floor(Math.random() * sources.length)],
        isAnomaly: true
      });
    }
  
    // Tambahkan data normal manual
    data.push({ id: `TX-${txId--}`, waktu: "19:35:12 WIB", nominal: "Rp 42.000", sumber: "E-Wallet (GoPay)", isAnomaly: false });
    return data;
  };