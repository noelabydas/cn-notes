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
      </div>
    ),
  },
];
