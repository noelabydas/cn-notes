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
];
