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
];
