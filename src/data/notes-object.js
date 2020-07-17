import React from "react";

export const notes = [
  {
    id: 0,
    title: "Introduction",
    content: (
      <div>
        <h1>Introduction</h1>
        <hr />
        <h4>Hardware, Firmware & Software</h4>
        <ul>
          <li>
            <b>Hardware</b>
            <ul>
              <li>Tangible/physical components</li>
              <li>Hardware cannot operate without firmware</li>
              <li>Hardware can be changed</li>
              <li>
                <b>Eg.</b> Peripherals devices, CPU, memory, mouse
              </li>
            </ul>
          </li>
          <li>
            <b>Firmware</b>
            <ul>
              <li>
                A software which runs more closely/intimately on the hardware
                than a general software.
              </li>
              <li>It is put or burnt at the time of hardware manufacturing</li>
              <li>
                It cannot be removed/changed once loaded and only can be updated
              </li>
              <li>It is written in machine language</li>
              <li>It is the heart of the device</li>
              <li>
                Present on all hardware like microwave, remote and SIM card.
                Helps in performing some basic activities like booting
              </li>
              <li>They are very small compared to software</li>
              <li>
                <b>Eg.</b> PC BIOS (startup firmware of the motherboard), timing
                and control mechanism
              </li>
            </ul>
          </li>
          <li>
            <b>Software</b>
            <ul>
              <li>
                Set of instructions or programs that tells a computer how to
                perform a particular task
              </li>
              <li>Software can be changed </li>
              <li>
                Software is stored in user accessible memory whereas firmware is
                stored in hardware (not accessible by user)
              </li>
              <li>
                Types :
                <ol>
                  <li>System software</li>
                  <li>Application software</li>
                </ol>
              </li>
              <li>
                <b>Eg.</b> MS office, Chrome, OS
              </li>
            </ul>
          </li>
        </ul>

        <hr />
        <h4>Transmission modes in computer systems</h4>
        <ul>
          <li>
            <b>Simplex</b>
            <ul>
              <li>Communication is unidirectional</li>
              <li>Only one device can transmit, the other can only receive</li>
              <li>
                <b>Eg.</b> Client server communication, TV, FM receiver,
                Keyboard
              </li>
            </ul>
          </li>
          <li>
            <b>Half duplex</b>
            <ul>
              <li>Each device can send and receive but not simultaneously</li>
              <li>
                When one is sending data the other can only receive and
                vice-versa
              </li>
              <li>Cable link is only one</li>
              <li>
                <b>Eg.</b> Walkie Talkie
              </li>
            </ul>
          </li>
          <li>
            <b>Full duplex</b>
            <ul>
              <li>Both stations can send and receive simultaneously</li>
              <li>
                Capacity of the link is shared among two (If total 2mbps then
                divided as 1 and 1mbs between A and B)
              </li>
              <li>
                <b>Eg.</b> Mobile phone
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    title: "OSI & TCP/IP Model",
    content: (
      <div>
        <h1>OSI & TCP/IP Model</h1>
        <hr />
        <div>
          <h4>OSI Model</h4>
          <ul>
            <li>
              <b>OSI :</b> Open System Interconnection (1976), developed by ISO
            </li>
            <li>It is just a reference model, it is not implemented</li>
            <li>Whereas TCP is the implemented practical model</li>
          </ul>
          <ul
            className="list-group"
            style={{ width: "250px", textAlign: "center" }}
          >
            <li className="list-group-item">Application</li>
            <li className="list-group-item">Presentation</li>
            <li className="list-group-item">Session</li>
            <li className="list-group-item">Transport</li>
            <li className="list-group-item">Network</li>
            <li className="list-group-item">Data link</li>
            <li className="list-group-item">Physical</li>
          </ul>
          <br />
          <ul>
            <li>
              <b>Software Layers</b>
              <ul>
                <li>
                  <b>Application</b>
                  <ul>
                    <li>Provide UI</li>
                    <li>All application software runs on this layer</li>
                    <li>
                      HTTP, FTP and Telnet protocols are appl. layer protocols
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Presentation</b>
                  <ul>
                    <li>Encryption and decryption happens here</li>
                    <li>
                      Translation of data into appropriate format takes place
                      here.
                    </li>
                    <li>
                      <b>Eg.</b> Opening a.txt and a.mp3 in a computer opens
                      data in both files appropriately based on extension. This
                      is done by presentation layer
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Session</b>
                  <ul>
                    <li>Provides end to end connection</li>
                    <li>Provides logical ports</li>
                    <li>
                      Establishes a session in which the transfer takes place
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Heart of OSI (connects SW and HW layers)</b>
              <ul>
                <li>
                  <b>Transport</b>
                  <ul>
                    <li>Segmentation happens. Data is divided into segments</li>
                    <li>
                      TCP and UDP protocol works here
                      <ul>
                        <li>
                          <b>TCP</b>
                          <ul>
                            <li>
                              Connection oriented (connection established first)
                            </li>
                            <li>Ack present</li>
                            <li>Reliable</li>
                            <li>Slow</li>
                            <li>Retransmission if data lost</li>
                            <li>
                              Used for non-real time data transfer. <b>Eg.</b>{" "}
                              mailing
                            </li>
                          </ul>
                        </li>
                        <li>
                          <b>UDP</b>
                          <ul>
                            <li>Connection less</li>
                            <li>Ack absent</li>
                            <li>Not reliable</li>
                            <li>Fast</li>
                            <li>
                              No retransmission if lost
                              <b>Eg.</b> Youtube video, video calling, phone
                              calling - fast and real time
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Hardware Layers</b>
              <ul>
                <li>
                  <b>Network</b>
                  <ul>
                    <li>Segments converted into packets</li>
                    <li>Tells the route to follow</li>
                    <li>
                      Routers work in this layer. Routes data by looking at IP
                      address on the packet header.
                    </li>
                    <li>
                      IP addressing takes place (both source and destination IP
                      added)
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Data Link</b>
                  <ul>
                    <li>Packets converted into frames</li>
                    <li>Error detection and correction</li>
                    <li>Flow control</li>
                    <li>Addressing based on MAC</li>
                  </ul>
                </li>
                <li>
                  <b>Physical</b>
                  <ul>
                    <li>Everything converted into bits/ binary form</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>TCP/IP Model</h4>
          <ul>
            <li>Transmission Control Protocol / Internet Protocol</li>
            <li>Proposed and developed by ARPA</li>
            <li>
              Initially created to connect military network, later on
              universities and govt. and much later on everything
            </li>
            <li>
              Whenever two devices connect on the internet this model is used
              for communication
            </li>
            <li>
              <b>TCP :</b> supported on transport layer{" "}
            </li>
            <li>
              <b>IP :</b> supported on network layer
            </li>
            <li>
              Both OSI and TCP/IP were developed independently, one is not a
              consequence of the other
            </li>
            <li>TCP/IP - 4 layers (Tannenbaum), 5 layers (Forouzan)</li>
          </ul>
          <h6>Model by Forouzan</h6>
          <ul
            className="list-group"
            style={{ width: "250px", textAlign: "center" }}
          >
            <li className="list-group-item">Application</li>

            <li className="list-group-item">Transport</li>
            <li className="list-group-item">Network</li>
            <li className="list-group-item">Data link</li>
            <li className="list-group-item">Physical</li>
          </ul>
          <br />
          <h6>Model by Tannenbaum</h6>
          <ul
            className="list-group"
            style={{ width: "250px", textAlign: "center" }}
          >
            <li className="list-group-item">Application</li>
            <li className="list-group-item">Transport (host-to-host)</li>
            <li className="list-group-item">Internet</li>
            <li className="list-group-item">Network access layer</li>
          </ul>
          <br />
          <p>
            These two different layer structures are because scientists at that
            time didn't specify the layer. They were just focused on
            implementing it. Later on other scientists studied it and have
            published their own interpretation of the layers
          </p>
          <b>TCP/IP define :</b>
          <ul>
            <li>How data is transmitted across network</li>
            <li>
              How data should be formatted so that other networked systems can
              understand
            </li>
            <li>
              Initially communication was dependent on hardware. Machines from
              one manufacturer was only able to communicate with the same
              brand's machine.
            </li>
            <li>
              So TCP/IP resulted in decentralization of communication. That is
              everything connected on the network irrespective of its brand can
              communicate
            </li>
          </ul>
          <b>Two key TCP/IP feature support decentralization</b>
          <ul>
            <li>
              <b>End node verification :</b> only endpoints are responsible for
              successful transmission. (No centralized control)
            </li>
            <li>
              <b>Dynamic routing :</b> multiple paths available between 2
              endpoints. Network chooses the best part for data transfer.
            </li>
          </ul>
          <b>Network issues</b>
          <ul>
            <li>Addressing</li>
            <li>Routing</li>
            <li>Name resolution</li>
            <li>Flow and error control</li>
            <li>Interoperability</li>
          </ul>
          <b>Application layer protocols</b> : DNS, DHCP, HTTP, HTTPS, FTP,
          SMTP, SNMP, TFTP (takes/connects the application to the internet)
          <br />
          <br />
          <b>Transport(host to host) layer protocols </b>: TCP, UDP
          <br />
          <br />
          <b>Internet layer protocol </b>: IP, responsible for logical
          transmission of data. It tells the IP of sender and receiver and also
          responsible for routing. IP is also connection oriented. Other
          protocols of this layer are ICMP, IGMP, ARP, RARP
          <br />
          <br />
          <b>Network access layer </b>: (data link + physical) - addressing now
          is based on MAC address
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Network Devices",
    content: (
      <div>
        <h1>Network Devices</h1>
        <hr />
        <div>
          <h4>Network devices at various layers</h4>
          <ul>
            <li>
              <b>Application, Presentation, Session & Transport :</b> Gateway
              (maximum gateways are used in application layer)
            </li>
            <li>
              <b>Network :</b> Router / Level 3 switch
            </li>
            <li>
              <b>Data Link :</b> Bridge / Switch
            </li>
            <li>
              <b>Physical :</b> Hub / Repeater
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Hub</h4>
          <ul>
            <li>It broadcasts the message to every connected node</li>
            <li>Half duplex</li>
            <li>
              Cannot store MAC (no memory, no table maintained, hence it sends
              to all)
            </li>
            <li>Electric signal or bits</li>
            <li>
              Single collision domain : only one common link on which collisions
              occur (as no. of collision domain increases the chance of packets
              getting dropped or collision decreases)
            </li>
            <li>LAN devices (only used in local area)</li>
            <li>
              Types :
              <ol>
                <li>
                  <b>Active Hub</b>
                  <ul>
                    <li>Requires power supply</li>
                    <li>
                      It amplifies(analog) or regenerates(digital) the signal
                    </li>
                    <li>It acts like a repeater</li>
                  </ul>
                </li>
                <li>
                  <b>Passive Hub</b>
                  <ul>
                    <li>Does not require electricity</li>
                    <li>
                      No change in signal during transmission, they pass it as
                      it is
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Hub looks like it works on star topology externally, but
              internally it works on bus topology. We don't use hub nowadays
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Repeater</h4>
          <ul>
            <li>It amplifies or regenerates your signal</li>
            <li>It is also a non intelligent device like hub</li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Bridge</h4>
          <ul>
            <li>Connects multiple network segments or LAN segments</li>
            <li>Little more intelligent than hub</li>
            <li>Bridge creates a table (port number, MAC address)</li>
            <li>To generate the table initially it broadcasts</li>
            <li>
              Once the entries are filled it multicasts (broadcast left or
              right)
            </li>
            <li>
              Bridge inspects incoming traffic and decides whether to forward or
              reject. It checks source and destination MAC address.
            </li>
            <li>Works on data link layer and MAC address</li>
            <li>It has 2 collision domain (2 ports to exit)</li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Switch (multi port bridge)</h4>
          <ul>
            <li>Intelligent device</li>
            <li>Forwards frames on data link layer based on MAC address</li>
            <li>Full duplex communication</li>
            <li>
              Maintains a table called Content Addressable Memory (CAM table)
              (port no, MAC addr)
            </li>
            <li>To fill the table first time it broadcasts</li>
            <li>
              Once filled, it only sends to the intended receiver (unicast)
            </li>
            <li>
              Every port has a dedicated link between i.e. Multiple collision
              domain
            </li>
            <li>It has one broadcast domain</li>
            <li>
              Types :
              <ol>
                <li>
                  <b>Store and forward switch :</b> it buffers and verifies
                  (checks error) each frame before forwarding it. Therefore a
                  bit slow but very reliable.
                </li>
                <li>
                  <b>Cut through switch :</b> It just reads the frame hardware
                  address (no error check) and forwards it. So, it is fast
                </li>
                <li>
                  <b>Fragment free switch :</b> (method to retain benefits of
                  both type 1 & 2) It just reads and checks for error in the
                  frame hardware address (MAC, first 64 bits) and then forwards
                  it
                </li>
                <li>
                  <b>Adaptive switching :</b> can work as any of the above 3
                  based on requirement
                </li>
              </ol>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Router</h4>
          <ul>
            <li>
              Internetworking device (all the above devices were networking
              device [works on a single network ID] ) (router connects two or
              more different networks, it is necessary for ports of router to be
              connected to different network IDs).
            </li>
            <li>Network layer device</li>
            <li>It maintains routing table (Port no., Network ID)</li>
            <li>Every port has its own broadcast domain</li>
            <li>
              Uses IP address to send packets (multiple routes may be available)
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>Gateway</h4>
          <ul>
            <li>
              It is a connecting device used to connect remote networks with the
              host network.
            </li>
            <li>Generally it acts as an entry or exit point</li>
            <li>Mostly operates at application level</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Network Types & Topology",
    content: (
      <div>
        <h1>Network Types & Topology</h1>
        <hr />
        <p>
          Design of network
          <br />
          <b>Physical topology</b> : Actual layout of computer cables
          (appearance)
          <br />
          <b>Logical/Signal topology</b> : The way actually devices communicate
          internally
        </p>
        <hr />
        <div>
          <h4>Types of Network</h4>
          <ol>
            <li>
              <b>LAN (Local Area Network)</b>
              <ul>
                <li>
                  Group of computers and network devices connected together
                  usually within the same building
                </li>
                <li>
                  If two computer communicate without using internet and using
                  some other cable or medium then no matter how far or near they
                  are, they are part of LAN (usually cables not used to connect
                  more than few kilometers)
                </li>
                <li>Maximum speed</li>
                <li>Most secure</li>
                <li>Less vulnerable</li>
                <li>Generally routers not involved</li>
                <li>Switches are most commonly used</li>
                <li>
                  cables : twisted pair, coaxial, ethernet cable, wifi
                  connection etc.
                </li>
              </ul>
            </li>
            <li>
              <b>MAN (Metropolitan Area Network)</b>
              <ul>
                <li>
                  It is large network that usually spans several buildings in
                  the same city
                </li>
                <li>It is an extension of LAN</li>
                <li>Here also internet is not used for communication</li>
                <li>moderate speed, secure, vulnerable</li>
                <li>cables : ethernet and similar to LAN</li>
              </ul>
            </li>
            <li>
              <b>WAN (Wide Area Network)</b>
              <ul>
                <li>Not restricted to a geographical area</li>
                <li>
                  If two computer communicate using internet then no matter how
                  far or near they are, they are part of WAN
                </li>
                <li>Minimum speed</li>
                <li>Least secure</li>
                <li>Most vulnerable</li>
                <li>Routers and switches are used</li>
                <li>cables : optical fibres, satellite</li>
              </ul>
            </li>
          </ol>
        </div>
        <hr />
        <div>
          <h4>Types of topology</h4>
          <ol>
            <li>
              <b>Mesh</b>
              <ul>
                <li>Each computer connects to every other computer</li>
                <li>
                  High level of redundancy (if one breaks, alternate path
                  available)
                </li>
                <li>Popular in WAN</li>
                <li>Wiring is very complex as no. of nodes increase</li>
                <li>Used nowadays to connect routers</li>
                <li>Secure because of dedicated link</li>
              </ul>
            </li>
            <li>
              <b>Bus</b>
              <ul>
                <li>
                  Uses a trunk or a back bone to which all the nodes are
                  connected
                </li>
                <li>System connects to backbone with T connector</li>
                <li>Coaxial cables were popular earlier</li>
                <li>Requires less cable</li>
                <li>Does not use any specialized network device</li>
                <li>Unsecure (all nodes get the info)</li>
                <li>If backbone breaks major part of network goes down</li>
                <li>We don't use much nowadays because of above reasons</li>
              </ul>
            </li>
            <li>
              <b>Ring</b>
              <ul>
                <li>Data travel in circular fashion</li>
                <li>
                  Most commonly wired in physical star configuration, but
                  logically ring
                </li>
                <li>
                  Token ring topology
                  <ul>
                    <li>Solves collision</li>
                    <li>
                      MSAU(multi station access unit) provide token to nodes
                      one-by-one, only the node with the token can communicate/
                      send message
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Tree</b>
              <ul>
                <li>Extension of bus and star (star + bus)</li>
                <li>New nodes can be added easily</li>
                <li>Root(trunk) breaks then network breaks</li>
                <li>Extension(adding nodes) is easy</li>
              </ul>
            </li>
            <li>
              <b>Star</b>
              <ul>
                <li>
                  All nodes connected to a centralised device called hub or
                  switch
                </li>
                <li>
                  Each device needs a single cable point-to-point communication
                  between the device and hub
                </li>
                <li>Most widely implemented</li>
                <li>Cable failure affects only single node</li>
                <li>
                  But central devices fails then whole network breaks (single
                  point of failure)
                </li>
                <li>Easier to add new device</li>
                <li>Easy to troubleshoot</li>
              </ul>
            </li>
            <li>
              <b>Hybrid</b>
              <ul>
                <li>Combination of two or more topology</li>
                <li>Used in connecting existing networks</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "MAC Address",
    content: (
      <div>
        <h1>MAC Address</h1>
        <hr />
        <b>Also known as</b>
        <ul>
          <li>Media Access Control (Mobile)</li>
          <li>Physical address (Laptop, PC)</li>
          <li>Hardware address</li>
          <li>Burnt-in-address (BIA) (Cisco route, switch)</li>
        </ul>
        <hr />
        <ul>
          <li>MAC address is globally unique</li>
          <li>MAC address doesn't belong to laptop</li>
          <li>
            MAC address belongs to <b>Network Interface Card</b> present in
            Laptop
          </li>
          <li>If NIC is changes MAC address gets changed</li>
          <li>
            Network Interface represent the ways in which a system can connect
            to the internet
          </li>
          <li>
            This can be
            <ul>
              <li>Ethernet RJ45 port</li>
              <li>Wifi</li>
              <li>Bluetooth ...etc.</li>
            </ul>
          </li>
          <li>Each interface will have its own MAC Address</li>
          <li>
            A system will have as many MAC address as there are NICs in it
          </li>
          <li>
            MAC address - 48 bits / 6 bytes
            <ul>
              <li>24 bits OUI (Organization Unique Identifier)</li>
              <li>24 bits vendor specific</li>
            </ul>
          </li>
          <li>
            MAC address is represented in hexadecimal format
            <ul>
              <li>
                <b>Eg. </b>34-AB-DE-14-FD-69 (laptop, PC)
              </li>
              <li>
                <b>Eg. </b>34 : AB : DE : 14 : FD : 69 (Mobile)
              </li>
              <li>
                <b>Eg. </b>34AB.DE14.FD69 (Router, switches)
              </li>
              <li>First 8 characters is the OUI</li>
            </ul>
          </li>
          <li>
            OUI is given by <b>IANA</b> - Internet Assigned Number Authority (It
            cannot be same for 2 companies) (Public IP address is also granted
            by them)
          </li>
          <li>
            Vendor specific company decides on its own (it can be same, but in
            overall unique)
          </li>
          <li>Switch will have a unique MAC address (all ports same)</li>
          <li>Router has MAC address for each Interface (all ports diff)</li>
          <li>
            FF:FF:FF:FF:FF:FF is the <b>Broadcast MAC address</b> (This request
            is accepted by all. This request shows that the sender wants to
            resolve MAC address using ARP)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: "IP Addressing",
    content: (
      <div>
        <h1>IP Addressing</h1>
        <hr />
        <ul>
          <li>Represents address of a device connected to a network</li>
          <li>
            Logical addressing
            <ul>
              <li>
                IPv4
                <ul>
                  <li>Public IP</li>
                  <li>Private IP</li>
                </ul>
              </li>
              <li>IPv6</li>
            </ul>
          </li>
        </ul>
        <hr />
        <div>
          <h4>IPv4</h4>
          <ul>
            <li>32 bit logical addressing</li>
            <li>4 octet (0-255)</li>
            <li>IP address = network ID + host ID</li>
            <li>
              <b>Classes</b>
              <ol>
                <li>
                  <b>Class A :</b> 1.0.0.0 to 126.0.0.0
                </li>
                <li>
                  <b>Class B :</b> 128.0.0.0 to 191.255.0.0
                </li>
                <li>
                  <b>Class C :</b> 192.0.0.0 to 223.255.255.0
                </li>
                <li>
                  <b>Class D :</b> 224.0.0.0 - 239.0.0.0
                </li>
                <li>
                  <b>Class E :</b> 240.0.0.0 - 255.0.0.0
                </li>
              </ol>
            </li>
            <li>
              Generally we don't use Class D and E
              <ul>
                <li>D generally used for multicast</li>
                <li>E generally used for research</li>
              </ul>
            </li>
            <li>
              127.0.0.0 is reserved for loopback address
              <ul>
                <li>
                  To check if NIC card is broken do ping 127.0.0.1, if response
                  is coming the problem is at the server end and not NIC
                </li>
              </ul>
            </li>
            <li>
              To identify class, only check the first octet and find it lies in
              which range
            </li>
            <li>N - reserved for network id, H - reserved for host id</li>
            <ul>
              <li>Class A - |N|H|H|H|</li>
              <li>Class B - |N|N|H|H|</li>
              <li>Class C - |N|N|N|H|</li>
            </ul>
            <li>
              <b>Subnet mask</b>
            </li>
            <ul>
              <li>Network bit is represented by 1</li>
              <li>Host bit is represented by 0</li>
              <li>
                Following are the subnet masks
                <ul>
                  <li>Class A : 255.0.0.0</li>
                  <li>Class B : 255.255.0.0</li>
                  <li>Class C : 255.255.255.0</li>
                  <li>
                    xyz/n - make all starting n bits 1 and remaining zero to
                    find its subnet mask
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <b>Public IP </b>needs to be purchased.
            </li>
            <li>
              <b>Private IP </b>
              <ul>
                <li>
                  This IP address can be used freely on local networks for
                  connecting computer
                </li>
                <li>Hence we see it being used in colleges/universities</li>
                <li>Class A - 10.0.0.0</li>
                <li>Class B - 172.16.x.x - 172.31.x.x</li>
                <li>Class C - 192.x.x.x</li>
              </ul>
            </li>
            <li>
              <b>Broadcast ID </b>is a specific address which is reserved for
              broadcasting messages to all computers connected in the network
            </li>
            <li>
              No. of usable IP address = 2<sup>(no. of bits of host part)</sup>{" "}
              - 2 (one for network id and another for broadcast id)
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4>IPv6</h4>
          <ul>
            <li>128 bits divided into eight 16 bits segment</li>
            <li>Not backward compatible with IPv4</li>
            <li>No broadcast support (anycast support)</li>
            <li>No class concept</li>
            <li>
              Represented in hexadecimal. Each segment will have 4 hex character
            </li>
            <li>
              If two or more consecutive 0 segments are there then replace it
              with :: (abbreviated IP)
            </li>
            <li>
              If two disjoint segments of 0s are there then :: represents
              largest consecutive 0 segment (if both same then use left-most)
            </li>
            <li>2 times :: cannot be present</li>
            <li>We can remove leading zeros of each segment</li>
          </ul>
          <b>Convert IPv4 to IPv6</b>
          <ul>
            <li>Make the first 80 bits starting from left to 0</li>
            <li>Set the next 16 bits to 1</li>
            <li>Finally the last 32 bits is replaced with IPv4</li>
          </ul>
          <b>Dual stack router</b> works with both IPv4 and IPv6.
          <br />
          <br />
          <b>Tunneling</b>
          <br /> Intermediate network devices may not work on IPv6. So IPv6
          packet is encapsulated in another packet containing IPv4 address. At
          the receiver end IPv6 is recovered by removing the encapsulation (if
          device only works with IPv6 then vice-versa happens).
          <br />
          <br />
          <b>NAT</b>
          <br />
          It enables private IP networks that use unregistered IP addresses to
          connect to the Internet. NAT operates on a router, usually connecting
          two networks together, and translates the private (not globally
          unique) addresses in the internal network into legal addresses, before
          packets are forwarded to another network. (NAT protocol translation or
          header translation. Header is translated between version 4 and 6).
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "IPv4 Header",
    content: (
      <div>
        <h1>IPv4 Header</h1>
        <hr />
        <div>
          <ul>
            <li>12 fields + 1 optional field</li>
            <li>It is of 20 bytes size (excluding optional field)</li>
            <li>It can have max size of 60 bytes (including optional field)</li>
            <li>Header is appended before the packet data</li>
            <li>Real world analogy : label on a box ordered from amazon</li>
          </ul>
          <hr />
          <h4>IPv4 Header format</h4>
          <p>(n) : size in bits</p>
          <table
            className="table table-sm table-bordered"
            style={{ textAlign: "center" }}
          >
            <tbody>
              <tr>
                <td>Version(4)</td>
                <td>IHL(4)</td>
                <td>TOS(8)</td>
                <td>Total length(16)</td>
              </tr>
              <tr>
                <td>Identifiers(16)</td>
                <td>Flags(3) </td>
                <td colSpan="2">Fragment Offset(13)</td>
              </tr>
              <tr>
                <td> TTL(8)</td>
                <td>Protocol(16) </td>
                <td colSpan="2">Checksum(16)</td>
              </tr>
              <tr>
                <td colSpan="4">Source address(32)</td>
              </tr>
              <tr>
                <td colSpan="4">Destination address(32)</td>
              </tr>
              <tr>
                <td colSpan="4">Optional(0-40)</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>
              Version
              <ul>
                <li>
                  Version number of Internet protocol (1,2,3,4,5,6,7,8) (only 4
                  and 6 used for addressing purpose)
                </li>
                <li>4 - 0100, 6 - 0110</li>
              </ul>
            </li>
            <li>
              IHL
              <ul>
                <li>Internet header length</li>
                <li>Represents length of entire IP header</li>
                <li>IHL field is scaled down by factor of 4</li>
                <li>
                  To get the size in bytes, multiply the the IHL value by 4
                  (1111 - 60bytes)
                </li>
              </ul>
            </li>
            <li>
              TOS
              <ul>
                <li>Type of service</li>
                <li>
                  It specifies datagram priority and request router for low
                  delay, high throughput, etc.
                </li>
              </ul>
            </li>
            <li>
              Total length
              <ul>
                <li>Length of entire IP packet (IP header + payload)</li>
              </ul>
            </li>
            <li>
              Identifier
              <ul>
                <li>
                  If IP packet is fragmented during transmission, then all
                  fragments contain the same identifier value to identify that
                  they belong to the same packet
                </li>
              </ul>
            </li>
            <li>
              Flags
              <ul>
                <li>This field tells if the packet can be fragmented or not</li>
                <li>MSB is always 0</li>
                <li>001 - fragment allowed</li>
                <li>000 - fragments not allowed</li>
                <li>
                  If packet is very large and it cannot be fragmented then
                  router discards the packet and sends an ICMP message to the
                  sender to reduce the packet size
                </li>
              </ul>
            </li>
            <li>
              Fragment Offset
              <ul>
                <li>Tells position of fragment in original IP packet</li>
              </ul>
            </li>
            <li>
              TTL (IPv4) (in IPv6 it is called hop count)
              <ul>
                <li>Time to live</li>
                <li>
                  To avoid looping every packet is sent with some TTL value
                </li>
                <li>
                  This value tells how many routers this packet can cross at
                  each router
                </li>
                <li>At every hop value is reduced by one</li>
              </ul>
            </li>
            <li>
              Protocol
              <ul>
                <li>
                  Tells network layer at the destination host to which protocol
                  this packet belongs
                </li>
                <li>
                  <b>Eg.</b> TCP is 6, UDP is 17
                </li>
              </ul>
            </li>
            <li>
              Header checksum
              <ul>
                <li>Checks for error in ONLY header</li>
              </ul>
            </li>
            <li>
              Source and destination address
              <ul>
                <li>IP address of source and destination</li>
              </ul>
            </li>
          </ul>
          <hr />
          <h4>IPv6 header</h4>
          40 bits - 8 fields
          <ol>
            <li>Version</li>
            <li>Traffic class</li>
            <li>Flow label</li>
            <li>Payload length</li>
            <li>Next header</li>
            <li>Hop length</li>
            <li>Source address</li>
            <li>Destination address</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Subnetting",
    content: (
      <div>
        <h1>Subnetting</h1>
        <hr />
        <div>
          If IP addresses are limited and getting used up quickly then what is
          the solution:
          <ul>
            <li>Use private IP</li>
            <li>Use IPv6</li>
            <li>Subnetting</li>
          </ul>
          <b>Subnetting : </b>network within a network (logical division of IP
          address)
          <ul>
            <li>
              If we want to connect 10 computers to a network and the network ID
              is 15.0.0.0
            </li>
            <li>
              The total number of available IP addresses are 2^24-2 but we are
              only using 10 addresses.
            </li>
            <li>
              The remaining addresses cannot be used for computer in other
              networks connected to router (all interfaces of a router should be
              connected to different Network ID, otherwise router will be
              confused).
            </li>
            <li>This wastage of IP addresses is solved through subnetting.</li>
          </ul>
          <b>/n :</b> Subnet or CIDR values (no. of bits reserved for network
          id)
          <br />
          <b>CIDR</b> Class Inter Domain Routing
          <ul>
            <li>Class A addr/8 Eg. 15.10.0.0/8</li>
            <li>Class B addr/16</li>
            <li>Class C addr/24</li>
          </ul>
          If above numbers are written after IP addresses then no subnetting has
          been done, if any other number is there then subnetting has been done.
          <br />
          <br />
          <b>Variable Length Subnet Mask (VLSM)</b> is used to reduce wastage of
          ip addresses in subnetting.
          <hr />
          <h4>Steps for subnetting</h4>
          <ol>
            <li>Identify the component with maximum connections</li>
            <li>Write the host part of the given address in binary</li>
            <li>
              Solve 2<sup>n</sup>-2 {">"}= (no. of max nodes in 1 component)
            </li>
            <li>
              Reserve last (right-most) n bits and give the rest to network
              (i.e. make it 1)
            </li>
            <li>
              Find subnet mask and also write starting IP address (xyz/32-n)
            </li>
            <li>
              Divide this into parts of size given by power of 2 where the first
              one lies from going right to left.
            </li>
            <li>
              All the obtained divisions are the subnets. The first IP address
              will be the subnet id and the last IP address will be the
              broadcast id.
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Supernetting",
    content: (
      <div>
        <h1>Supernetting</h1>
        <hr />
        <div>
          <ul>
            <li>AKA prefix aggregation/ route aggregation</li>
            <li>
              Done for router so that it doesn’t need to maintain table entry
              for every small network.
            </li>
            <li>
              Supernetting is combining of two or more IP network / IP
              subnetwork having a common subnet mask or CIDR.
            </li>
            <li>It reduces routing table entries</li>
            <li>
              <b>Eg. </b>Suppose two routers R1 and R2 are connected to each
              other. R1 is connected to 3 networks (n1, n2 and n3). R1's
              rrouting table will contain entries for the machines in the
              network n1, n2 and n3. R2's routing table also will contain
              entries for machines in the network n1, n2 and n3. But this is not
              required, R2 can store a single address pointing to R1 and then R1
              will route it to specific computer, hence space is saved
            </li>
          </ul>
          <hr />
          <h4>Conditions for supernetting</h4>
          <ul>
            <li>Contiguous in nature</li>
            <li>Size of all network should be same</li>
            <li>Network ID should be divisible by total number of host bits</li>
          </ul>
          <hr />
          <h4>Steps for supernetting</h4>
          <ol>
            <li>Convert IP addresses into binary</li>
            <li>Perform AND operation</li>
            <li>
              Find the first bit from LHS where there is a difference in the
              value.
            </li>
            <li>
              Reserve that bit and all the bits on the right side of it for the
              host id.
            </li>
            <li>
              Find the supernet id xyz/n (xyz = value of AND, n = 32 - bits
              reserved for host id).
            </li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Domain Name System",
    content: (
      <div>
        <h1>Domain Name System (DNS)</h1>
        <hr />
        <ul>
          <li>DNS is a host name to IP address translational service</li>
          <li>Analogous to phonebook in our mobile</li>
          <li>Used for host name to IP address resolution</li>
          <li>
            It can also convert from IP address to host name (forward and
            reverse lookups)
          </li>
          <li>It is an Application layer protocol</li>
          <li>
            Previously before DNS all the hostnames where stored in host.txt
            file
          </li>
          <li>6 top level domains included - com, org, mil, biz, net, edu</li>
          <li>Country level domain also exist - in, uk, jp, us</li>
          <li>DNS server is highly targeted for hacking purpose</li>
          <li>
            It uses TCP and UDP on port 53 (most of the time UDP is used as its
            fast)
          </li>
          <li>Today DNS supports 13 root name servers (A to M)</li>
          <li>
            There are two ways to resolve an IP address
            <ul>
              <li>By building a host table on each router</li>
              <li>By building a DNS server</li>
            </ul>
          </li>
        </ul>
        <b>Domain</b>
        <ul>
          <li>Generic (com, org)</li>
          <li>Country (in, uk)</li>
          <li>Inverse (IP to domain name mapping)</li>
        </ul>
        <b>Namespace</b>
        <ul>
          <li>A namespace maps each address to a unique name</li>
          <li>
            Namespace
            <ul>
              <li>
                Flat structure
                <ul>
                  <li>
                    In this method, names are assigned to an address. It is
                    sequence of characters without any structure
                  </li>
                  <li>Can't be used in large system</li>
                </ul>
              </li>
              <li>
                Hierarchical structure
                <ul>
                  <li>Name is made of several paths</li>
                  <li>Namespace can be decentralised</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <b>Hierarchy of name servers</b>
        <ul>
          <li>
            Root name server
            <ul>
              <li>
                It is contacted by Name servers that cannot resolve the name
              </li>
              <li>
                It contacts the Top level name server if the name mapping is not
                known.
              </li>
              <li>It then gets the mapping and returns the IP address</li>
            </ul>
          </li>
          <li>
            Top level server
            <ul>
              <li>
                It is responsible for .com, .org, .edu etc. and all top level
                country domain like .in, .uk
              </li>
              <li>
                They have information about Authoritative domain servers and
                know the names and IP addresses of each Authoritative name
                server for second level domains
              </li>
            </ul>
          </li>
          <li>
            Authoritative name server
            <ul>
              <li>
                It can be maintained by an organization or service provider. In
                order to reach facebook.com we have to ask the root DNS server.
                Then it will point out to the top level domain server, and then
                to the authoritative domain name server which actually contains
                the IP address. So an authoritative server will return the
                associated IP address.
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h4>Domain name resolution</h4>
        <div>
          Name resolution takes place from right to left. <b>Eg. </b>
          google.co.in (first .in, then .co and finally google)
          <ul>
            <li>
              When a request is made, machine first checks its cache to see
              whether the address is present
            </li>
            <li>
              If it is not present then machine contacts the ISP (Intenet
              service provide)
            </li>
            <li>Then it calls the root DNS</li>
            <li>Then the top level DNS is checked</li>
            <li>Then finally authoritative DNS returns the IP address</li>
          </ul>
          In each of the above steps, fist the cache is checked and the reduest
          is forwarded only if cache miss occurs.
          <br />
          <b>Ways of name resolution</b>
          <ol>
            Let's suppose we are trying to resolve abc.xyz.in
            <li>
              <b>Recursive</b>
              <ul>
                <li>Host machine contacts local name server</li>
                <li>Local name server contact root name server</li>
                <li>Root name server contacts intermediary name server</li>
                <li>
                  The intermediary name server contacts the final root name
                  server
                </li>
                <li>
                  Final root name server returns the IP address along with the
                  name of NS authoritative for the domain abc.xyz.in to the
                  intermediary name server
                </li>
                <li>
                  Intermediary name server returns all IP addresses and name of
                  NS authoritative for the domain xyz.in to root name server
                </li>
                <li>
                  Root name server returns all IP addresses and name of NS
                  authoritative for the TLD .in to the local name server
                </li>
                <li>
                  Local name server caches all answers and returns the ressolved
                  name to the host machine
                </li>
              </ul>
            </li>
            <li>
              <b>Iterative</b>
              <ul>
                <li>Host machine contacts local name server</li>
                <li>Local name server contact root name server</li>
                <li>
                  Root name server returns all IP addresses and name of NS
                  authoritative for the TLD .in to the local name server
                </li>
                <li>Local name server contacts intermediary name server</li>
                <li>
                  Intermediary name server returns all IP addresses and name of
                  NS authoritative for the domain xyz.in to local name server
                </li>
                <li>Local name server contacts final root name server</li>
                <li>
                  Final root name server returns the IP address along with the
                  name of NS authoritative for the domain abc.xyz.in to the
                  local name server
                </li>
                <li>
                  Local name server caches all answers and returns the ressolved
                  name to the host machine
                </li>
              </ul>
            </li>
          </ol>
          <b>Fully qualified domain name</b>
          <ul>
            <li>In this label is terminated by null string (.)</li>
            <li>
              <b>Eg.</b> abc.xyz.in. - here . represents root, i.e. the domain
              name represents path till root
            </li>
            <li>FQDM represents path from leaf to root.</li>
            <li>It contains full name of the host.</li>
          </ul>
          <b>Partially qualified domain name</b>
          <ul>
            <li>In this the label is not terminated by null string (.)</li>
            <li>
              <b>Eg.</b> abc.xyz.com - doesn't end with .
            </li>
            <li>
              PQDM starts from a leaf node but does not reach the root or does
              not start from leaf.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Dynamic Host Configuration Protocol",
    content: (
      <div>
        <h1>Dynamic Host Configuration Protocol - DHCP</h1>
        <hr />
        <ul>
          <li>DHCP functions at the application layer of TCP/IP stack</li>
          <li>
            One of the primary tasks of the protocol is to automatically assign
            IP addresses to DHCP clients
          </li>
          <li>
            These IP addresses are known as dynamically assigned IP addresses
          </li>
          <li>Destination port/ listen - 67</li>
          <li>Source port/send request - 68</li>
          <li>DHCP mostly provides private IP addresses</li>
          <li>
            These assigned IP addresses change after some time period, again new
            address is assigned by DHCP server
          </li>
          <li>It is based on client-server model</li>
          <li>DHCP IP address range is called scope</li>
          <li>
            Boot P is another method to allocate to IP, but MAC address must be
            entered manually (DHCP protocol stems from the bootstrap protocol.
            BOOTP enables client to boot up from the network instead of booting
            up from the hard drive)
          </li>
          <li>DHCP is dynamic BootP</li>
          <li>It uses UDP port 67 and 68 at Transport layer</li>
        </ul>
        <b>DHCP server can provide</b>
        <ol>
          <li>IP address</li>
          <li>Subnet mask</li>
          <li>Domain name</li>
          <li>Default gateway</li>
          <li>DNS server address</li>
          <li>WiNS server address</li>
        </ol>
        <hr />
        <h4>DORA process (Discover Offer Request Acknowledge)</h4>
        <ul>
          <li>
            It's the process through which client gets IP address from DHCP
            server.
          </li>
          <li>
            Initially when a new client joins a network it doesn't have any
            address of its own and others. So it broadcasts a discovery message.
            This message is intended to be received by a DHCP server to request
            for an IP address. This message is sent when the client boots up.
          </li>
        </ul>
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center" }}
        >
          <tbody>
            <tr>
              <th>DHCP message</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>Discover (port 68)</td>
              <td>
                UDP broadcast from DHCP client to locate available DHCP server.
                Layer 2 (data link) broadcast - FF:FF:FF:FF:FF:FF. Layer 3
                (network) broadcast - 255.255.255.255
              </td>
            </tr>
            <tr>
              <td>Offer (port 67)</td>
              <td>
                DHCP server to client in response to DHCP discover with offer of
                configuration parameters (IP address of DHCP server, offer IP,
                MAC address of client, subnet mask, lease length)
              </td>
            </tr>
            <tr>
              <td>Request (port 68)</td>
              <td>
                Client then broadcast (because multiple DHCP servers possible)
                to the server a DHCP request message asking for the offered IP
                address and possible other info.
              </td>
            </tr>
            <tr>
              <td>Acknowledge (port 67)</td>
              <td>
                Server to client with configuration parameters, including
                committed network address
              </td>
            </tr>
          </tbody>
        </table>
        <b>DHCP Scope</b>
        <ul>
          <li>
            Set of IP addresses which the DHCP server can assign to clients
          </li>
          <li>It is configured by administrator</li>
        </ul>
        <b>Super scope :</b> a superscope is the grouping of scopes under one
        administrative entity that enable the client to obtain IP addresses and
        renew IP address from any scope that is part of the super scope
        <br />
        <br />
        <b>Super scope is used when:</b>
        <ul>
          <li>
            The existing scope i.e. the IP addresses and supply is being
            depleted
          </li>
          <li>You want to use two DHCP servers on the same subnet</li>
          <li>
            You need to move client from one range of IP address to a different
            range of IP address
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 11,
    title: "Address Resolution Protocol",
    content: (
      <div>
        <h1>Address Resolution Protocol - ARP</h1>
        <hr />
        <ul>
          <li>Converts logical address to physical address</li>

          <li>ARP finds MAC address of a host from its known IP address</li>
          <li>It is a layer 2 protocol (data link)</li>
          <li>ARP request is a broadcast, but ARP response is a unicast</li>
          <li>The ARP concept used only in IPv4 environment</li>
          <li>ARP is never generated for the device of other network</li>
          <li>ARP request can only be generated within the same network ID</li>
          <li>Once ARP response is received, it is stored in ARP cache</li>
        </ul>
        <hr />
        <h4>Types of ARP</h4>
        <ol>
          <li>ARP</li>
          <li>Proxy ARP</li>
          <li>Reverse ARP (physical -{">"} logical address)</li>
          <li>Gratuitous ARP</li>
        </ol>
        <b>Proxy ARP</b>
        <ul>
          <li>
            Proxy ARP is a technique by which a proxy device on a given network
            answers the ARP queries for an IP address that is not on that
            network. The proxy is aware of the traffic's destination and offers
            its own MAC address as destination
          </li>
        </ul>
        <b>Reverse ARP (RARP)</b>
        <ul>
          <li>
            It is a network layer protocol used to obtain an IP address for a
            given MAC address. The primary limitation of RARP is that each MAC
            address must be configured manually on a centralized server useful
            for diskless system.
          </li>
        </ul>
        <b>Gratuitous ARP</b>
        <ul>
          <li>
            Used to verify that two same IP addresses have not been assigned to
            different machines in a single network
          </li>
          <li>
            Host will broadcast a GARP request in which host will put both
            source and destination IP address as its own IP address
          </li>
          <li>Another machine having same IP will reply</li>
        </ul>
        <hr />
        <h4>Format of ARP packet</h4>
        <table
          className="table table-sm table-bordered"
          style={{ textAlign: "center" }}
        >
          <tbody>
            <tr>
              <td colSpan="2">Hardware type</td>
              <td>Protocol type</td>
            </tr>
            <tr>
              <td>Hardware Address Length</td>
              <td>Protocol Address Length</td>
              <td>Operation Code (req-1 reply-2)</td>
            </tr>
            <tr>
              <td colSpan="3">Sender H/W address (MAC)</td>
            </tr>
            <tr>
              <td colSpan="3">Sender protocol address (IP address)</td>
            </tr>
            <tr>
              <td colSpan="3">Target H/W address (all 0s)</td>
            </tr>
            <tr>
              <td colSpan="3">Target protocol address</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            If the destination is in another network then machine will generate
            ARP request for default gateway (IP address of router interface
            connected to it on its own network side)
          </li>
          <li>
            Router will send reply to the host with its own MAC address (so host
            will send packet to it)
          </li>
          <li>
            Simultaneously router will send another ARP request from interface
            on the destination machine's side to find the MAC address
          </li>
          <li>
            Router will receive the MAC as reply and will forward the packet
            received from host
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 12,
    title: "WiFi",
    content: (
      <div>
        <h1>WiFi - Wireless Fidelity</h1>
        <hr />
        <ul>
          <li>IEEE 802.11 protocol</li>
          <li>
            It is a medium to connect devices for sharing data, internet etc.
          </li>
          <li>Nowadays used to connect appliances IOT</li>
          <li>1990 - Vic Hayes - Father of WiFi</li>
        </ul>
        <hr />

        <h4>Wifi standards</h4>
        <ol>
          <li>
            <b>IEEE 802.11 (released in 1997)</b>
            <ul>
              <li>Worked on 2.4 GHz (unlicensed band i.e. no need to pay)</li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 b (released in 1999)</b>
            <ul>
              <li>Operating frequency - 2.4 Ghz</li>
              <li>Max Data Rate - 11Mbps</li>
              <li>
                Devices using this faces interference from microwave oven,
                bluetooth, cordless transmission.
              </li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 a (released in 2002)</b>
            <ul>
              <li>Operating frequency - 5GHz</li>
              <li>Data Rate - 1.5 to 54 Mbps</li>
              <li>
                Multiplexing techniques - OFDM (orthogonal Frequency Division
                Multiplexing)
              </li>
              <li>
                Effective range is small due to higher (higher frequency means
                lower penetrating power)
              </li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 g (released in 2003)</b>
            <ul>
              <li>Operating frequency - 2.4 Ghz</li>
              <li>Transmission technique - OFDM</li>
              <li>
                Backward compatible (can communicate with devices of older
                standards)
              </li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 n (released in 2009) (most popular)</b>
            <ul>
              <li>Support MIMO (multiple input, multiple output)</li>
              <li>Operating frequency - 2.4 to 5GHz</li>
              <li>Data Rate (600 Mbps)</li>
              <li>Backward compatible</li>
            </ul>
          </li>
          <li>
            <b>
              IEEE 802.11 ac (released in 2013) (most mobiles supports this
              nowadays)
            </b>
            <ul>
              <li>Wider channel - 80 or 160 MHz vs 40 MHz</li>
              <li>Higher modulation - 256 QAM</li>
              <li>Support multiuser MIMO</li>
              <li>Operating frequency 5GHz</li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 ad (released in 2010)</b>
            <ul>
              <li>Paid because they do not operate on unlicensed band</li>
              <li>Names as WiGig</li>
              <li>Operating frequency - 60 GHz</li>
              <li>Data Rate - 7 Gbps</li>
            </ul>
          </li>
          <li>
            <b>IEEE 802.11 af (released in 2014)</b>
            <ul>
              <li>Paid because they do not operate on unlicensed band</li>
              <li>Names as Super-WiFi or White-Fi</li>
              <li>Operating frequency - 54-790 MHz (very wide range ~20 KM)</li>
              <li>Supports MIMO</li>
              <li>Data Rate - 10 Gbps</li>
            </ul>
          </li>
        </ol>
        <hr />
        <h4>Wireless security protocols</h4>
        <ul>
          <li>WEP (wireless equivalent privacy) easily cracked</li>
          <li>WPA (wifi protected access) better and stronger encryption</li>
          <li>WPA 2 (even stronger encryption - AES)</li>
          <li>WPA 3 (2018)</li>
          <li>
            WPS (wifi protected setup) designed to make it easy for devices to
            join a secure wireless network.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 13,
    title: "HTTP/HTTPS",
    content: (
      <div>
        <h1>HTTP/HTTPS</h1>
        <hr />
        <ul>
          <li>
            <b>HTTP :</b> works on application layer
          </li>
          <li>
            <b>HTTPS :</b> works on transport layer
          </li>
          <li>Used to connect web browser to web server</li>
          <li>
            With the help of these protocols information of a particular website
            is exchanged between web browser and web server.
          </li>
          <li>
            Initially it was used to exchange or serve HTML pages, but nowadays
            the scope has been increased.
          </li>
          <li>HTTP/HTTPS is a stateless protocol but not sessionless</li>
          <li>
            HTTP itself is stateless but cookies allows the use of stateful
            sessions
          </li>
          <li>HTTPS requires SSL certificates</li>
          <li>Both are based on TCP communication</li>
          <li>HTTP works on port 80</li>
          <li>HTTPS works on port 443</li>
        </ul>
        <b>Component of HTTP based system</b>
        <ul>
          <li>Client</li>
          <li>
            Proxy (proxies include anything between client and server like
            router, switches, firewall, gateways)
          </li>
          <li>Server</li>
        </ul>
        <b>HTTP is a client-server protocol</b> request is sent by one entity or
        user agent (mostly the web browser)
        <br />
        <br />
        <b>Proxies can perform various functions</b>
        <ul>
          <li>Caching (history and browser cache)</li>
          <li>Filtering (like anti-virus scan)</li>
          <li>Load balancer (balancing the loads)</li>
          <li>Authentication</li>
          <li>Logging (allows storage of historical information)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 14,
    title: "Other protocols",
    content: (
      <div>
        <h1>Other protocols</h1>
        <hr />
        <h4>File Transfer Protocol (FTP)</h4>
        <ul>
          <li>Application layer protocol</li>
          <li>
            To transfer files 2 TCP connections are used in parallel
            <ol>
              <li>
                <b>Control connection</b>
                <ul>
                  <li>
                    For sending control info. like user identification,
                    password, commands to change the remote directory, commands
                    to retrieve and store files etc.
                  </li>
                  <li>It is active throughout the session</li>
                  <li>It uses TCP port 21</li>
                </ul>
              </li>
              <li>
                <b>Data connection</b>
                <ul>
                  <li>Connection for sending the actual file</li>
                  <li>It uses TCP port 20</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            FTP server has collection of files, the FTP client like file zilla
            connects to it through internet with a url like ftp.abc.com and
            files can be downloaded
          </li>
          <li>Nowadays used less, was used more before HTTP</li>
          <li>FTP is not a secure protocol because data is not encrypted</li>
          <li>
            It is also used for downloading the files to computer from other
            servers
          </li>
          <li>Popular FTP clients : FileZilla, WinSCP, CyberDuck, gFTP</li>
          <li>Now we generally use dropbox, google drive in place of FTP</li>
          <li>
            FTP allows 3 types of data structure
            <ol>
              <li>
                <b>File structure</b>
                <ul>
                  <li>No internal structure</li>
                  <li>
                    File is considered to be continuous sequence of data bytes
                  </li>
                </ul>
              </li>
              <li>
                <b>Record structure</b>
                <ul>
                  <li>File is made up of sequential records</li>
                </ul>
              </li>
              <li>
                <b>Page structure</b>
                <ul>
                  <li>File made up of independent indexed pages</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>
            Transmission modes of FTP
            <ul>
              <li>
                <b>Stream mode :</b> data transmission is continuous stream of
                bytes
              </li>
              <li>
                <b> Block mode :</b> data transmitted in blocks like 256 bytes
                or 512 bytes
              </li>
              <li>
                <b>Compressed mode :</b> file is compressed and sent and is used
                for very large files
              </li>
            </ul>
          </li>
          <li>
            <b>FTP commands</b>
            <ul>
              <li>
                Transfer file command
                <ul>
                  <li>GET : get file from remote computer</li>
                  <li>PUT : to send file to server</li>
                  <li>SEND : send single file</li>
                </ul>
              </li>
              <li>
                Connect to remote host command
                <ul>
                  <li>
                    USER : the command that sends user identification to the
                    server
                  </li>
                  <li>OPEN : open address</li>
                  <li>
                    PASS : the command sends the user password to the server
                  </li>
                </ul>
              </li>
              <li>
                Terminate session commands
                <ul>
                  <li>CLOSE : disconnect FTP, but does not terminate user</li>
                  <li>
                    QUIT : the command fully disconnects remote host and
                    terminate FTP
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h4>Secure File Transfer Protocol (SFTP)</h4>
        <ul>
          <li>Data is encrypted</li>
          <li>SFTP uses SSH/SSL/TLS</li>
          <li>It uses port 22</li>
          <li>
            Designed by IETF (internet engineering task force) as an extended
            version of SSH 2.0, allowing file transfer over SSH and use with
            transport layer security (TLS) ans VPN applications
          </li>
          <li>SFTP is slower than FTP</li>
        </ul>
        <hr />
        <h4>Trivial File Transfer Protocol (TFTP)</h4>
        <ul>
          <li>Mainly used for transferring files within a LAN</li>
          <li>No encryption</li>
          <li>It uses UDP therefore unreliable</li>
          <li>It uses port 69</li>
          <li>Not used to transfer files over the internet</li>
          <li>It is good for simple file transfer like during boot time</li>
          <li>It is fastest among three</li>
        </ul>
        <hr />
        <h4>Simple Mail Transfer Protocol (SMTP)</h4>
        <ul>
          <li>
            SMTP is used by the client to send email to the server (only for
            sending, not for receiving - for receiving other protocols like IMAP
            or POP3)
          </li>
          <li>SMTP is an application layer protocol</li>
          <li>
            It uses TCP port 25 (some web mail services like gmail use
            unofficial TCP port 465 for SMTP)
          </li>
          <li>SMTP is a push protocol</li>
          <li>SMTP requires each message in 7-bit ASCII format</li>
        </ul>
        <b>SMTP commands</b>
        <ul>
          <li>
            <b>HELO and EHLO (extended hello) :</b> commands that initiate a new
            protocol session between client and server. The EHLO command request
            them to respond with any optional SMTP extension it support{" "}
          </li>
          <li>
            <b>MAIL FROM :</b> command to initiate sending an email message or
            to identify sender
          </li>
          <li>
            <b>RCPT :</b> identify intended recipient
          </li>
          <li>
            <b>DATA :</b> command indicating the start of transmission of the
            email message The last message is "." as a termination character to
            signify the end of the mail.
          </li>
          <li>
            <b>RSET (reset):</b> reset the connection if it encounters an error
          </li>
          <li>
            <b>NOOP (no operation):</b> empty message like ping to check the
            responsiveness of the other end
          </li>
          <li>
            <b>QUIT :</b> terminates the protocol session
          </li>
        </ul>
        <b>SMTP Model</b>
        <p>
          Sender -{">"} UA(user agent) like gmail, yahoo -{">"} Sent Mail Queue
          -{">"} MTA (message transfer agent) client {"<"}-TCP port 25-{">"} MTA
          server -{">"} Recipient Mailbox -{">"} UA -{">"} Receiver
        </p>
        <p>
          <b>MTA :</b> responsible for transferring and routing an email message
          from the sender's computer to the recipient's computer
        </p>
        <b>Mail transfer phases</b>
        <ol>
          <li>Connection establishment</li>
          <li>Message transfer</li>
          <li>Connection termination</li>
        </ol>

        <hr />
        <h4>POP3 and IMAP (message access agent)</h4>
        <ul>
          <li>Pull protocol</li>
          <li>Protocols to receive mail at receiver end</li>
        </ul>
        <b>POP3 (Post Office Protocol version 3)</b>
        <ul>
          <li>
            It is a simple protocol that only allows downloading machine from
            inbox to your local machine
          </li>
          <li>
            It usually deletes the mail from inbox of mail server once it is
            downloaded, this is because each user has limited storage
          </li>
          <li>we can keep the mail by changing the default behaviour</li>
          <li>
            The pop server listen on port 110 and the pop with SSL secure server
            listen on port 995
          </li>
          <li>In POP3 the mail can access from a single device at a time</li>
          <li>
            To read the mail, it has to be downloaded first. Once downloaded
            mail can be read in offline mode as well
          </li>
          <li>Does not syncs folder structure</li>
          <li>Does not allow user to organise mails and folders</li>
          <li>The user cannot create, delete or rename on the mail server</li>
          <li>Can only search emails after downloading</li>
        </ul>
        <b>IMAP (Internet Message Access Protocol version 4)</b>
        <ul>
          <li>
            IMAP is much more advanced and allows the user to see the folder on
            the mail server (no compulsion of downloading)
          </li>
          <li>
            The IMAP server listens on port 143 and IMAP with SSL secure server
            listen on port 993
          </li>
          <li>It is periodically cached from server to local memory</li>
          <li>
            It can be accessed from multiple devices (all are synchronised)
          </li>
          <li>The mail content can be read partially before downloading</li>
          <li>Syncs folder structure</li>
          <li>The user can organise the mail directly on the mail server</li>
          <li>The user can create, delete or rename mail on the mail server</li>
          <li>Can search emails on the server</li>
        </ul>
      </div>
    ),
  },
];
