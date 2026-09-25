# MINTSEM
## Academic Records Authentication System using Blockchain and NFTs

## Overview

This project aims to leverage blockchain technology and Non-Fungible Tokens (NFTs) to create a secure and immutable system for managing academic records. By utilizing IPFS for decentralized file storage and genAI for NFT generation, the system ensures the integrity and credibility of academic documents while enabling easy verification by users and third-party entities.

## Features

-   **Decentralized Storage**: Academic records (grade cards) are stored on IPFS, providing decentralized and tamper-proof storage.
-   **NFT Creation**: NFTs are minted for each academic record using deployed smart contracts Starton, and the required image is generated using genAI, linking them to the corresponding IPFS address.
-   **Immutable Records**: Utilizing blockchain technology, academic records become immutable, preventing unauthorized modifications.
-   **Transparency**: Any changes made to academic records by the issuing organization are recorded on the blockchain, providing transparency.
-   **Verification**: Users can easily verify their academic credentials by presenting their NFTs, which are cryptographically linked to their academic records.
-   **Third-party Verification**: Employers and other organizations can verify the authenticity of academic records through blockchain-based verification systems.
- **MongoDB**: We are using MongoDB, as the database program.

## Implementation

1.  **IPFS Integration**: Academic records are uploaded to IPFS, and the generated CID (Content IDentifier) is stored.
2.  **NFT Generation**: NFTs are created for each academic record using genAI, with the CID as metadata.
3.  **Smart Contract Development**: Smart contracts are developed to manage NFT issuance and verification on the blockchain.
4.  **User Interface**: An intuitive user interface allows students to access and manage their academic records, while also enabling verification by third parties.
5.  **Blockchain Integration**: Integration with a blockchain network (e.g., Ethereum) ensures the immutability and transparency of academic records.


## Usage

1.  **Academic Record Issuance**:
    -   Organization X (e.g., IITG) uploads academic records to the platform, which generates corresponding NFTs.
    -   The platform ensures that only authorized personnel from Organization X can upload and manage academic records.
2.  **Third-party Verification**:
    -   Third-party entities, such as employers or other educational institutions, can verify the authenticity of academic records by querying the blockchain with the provided NFTs.
    -   They can verify the records without accessing sensitive information, ensuring privacy and security.


Certainly! Below, I'll provide example code snippets for each of the setup steps mentioned:

### 1. Install Dependencies

Frontend:
```bash
cd frontend
npm install
```

Backend:
```bash
cd backend
npm install
```

### 2. Configure IPFS

Ensure you have an IPFS node running on your system or use a public IPFS gateway. No code is required for this step.



### 3. Testing

Test the entire system to ensure that academic records can be securely uploaded, NFTs are generated correctly, and third-party verification functions as expected. Write unit tests and integration tests for both frontend and backend components.

### 4. Deployment

Deploy the frontend and backend applications to your chosen hosting provider or server. Ensure that all configurations are correctly set up for the production environment.

This provides an overview of the setup process with code snippets for each step. Make sure to customize the code according to your specific project requirements and chosen technologies.

## How to Run

To start the frontend server, run:

bash

```
cd frontend
npm start
``` 

To start the backend server, run:

bash

```
cd backend
npm start
```

## Contributors
-   Srayash Singh
-   Raunit Patel
-   Shashwat Srivastava
-   Rohit Solanki
-   Mayank 
-    Raghav Modi
-    Shrestha Pandey
-   Prem Yadav
-   Rahul Gautam

## Future Scope
As of now, we are fetching data from manually created MongoDB database but in future we can use the institute database to fetch the academic records.



## Acknowledgements
-   Thanks to the creators of IPFS, genAI, and blockchain technologies for providing the necessary tools and frameworks.

----------

