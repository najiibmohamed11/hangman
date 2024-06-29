var HARDWARE = [
  "motherboard", "processor", "graphics card", "RAM", "SSD", "hard drive", "power supply",
  "cooling fan", "network card", "sound card", "optical drive", "GPU", "CPU", "keyboard", 
  "mouse", "webcam", "monitor", "speaker", "joystick", "VR headset", "router",
];

var PROGRAMMING_LANGUAGES = [
  "JavaScript", "Python", "Java", "C#", "Ruby", "Swift", "Go", "Kotlin", "PHP", 
  "TypeScript",  "Rust", "C++", "C", "Dart", 
 
];

var FRAMEWORKS = [
  "React", "Angular", "Vue.js", "Django", "Flask", "Ruby on Rails", "Spring", 
  "Express", "ASP.NET", "Laravel", "Symfony", "Gatsby", "Next.js", "TensorFlow", 
  "PyTorch", "Bootstrap", "jQuery", "Svelte"
];

var OPERATING_SYSTEMS = [
  "Windows", "macOS", "Linux", "Ubuntu", "Fedora", "Debian", "Red Hat", "CentOS", 
  "Android", "iOS", "Unix", "Chrome OS", "FreeBSD", "Solaris", "Arch Linux"
];

var NETWORKS = [
  "LAN", "WAN", "VPN", "TCPIP", "Internet", "Intranet", "Extranet", "Ethernet", 
  "WiFi", "NFC", "Bluetooth", "5G", "4G", "Satellite", "Fiber Optics", "Modem", 
  "Router", "Switch", "Firewall", "Proxy Server"
];

function randomWord(type=HARDWARE) {
  switch (type) {
      case 'programming':
          return PROGRAMMING_LANGUAGES[Math.floor(Math.random() * PROGRAMMING_LANGUAGES.length)].toLowerCase();
      case 'frameworks':
          return FRAMEWORKS[Math.floor(Math.random() * FRAMEWORKS.length)].toLowerCase();
      case 'operating_systems':
          return OPERATING_SYSTEMS[Math.floor(Math.random() * OPERATING_SYSTEMS.length)].toLowerCase();
      case 'networks':
          return NETWORKS[Math.floor(Math.random() * NETWORKS.length)].toLowerCase();
      case 'hardware':
      default:
          return HARDWARE[Math.floor(Math.random() * HARDWARE.length)].toLowerCase();
  }
}

    export { randomWord };