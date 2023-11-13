# Project Title

## Overview

What is your app? Brief description in a couple of sentences.

_Moné is a **financial connectivity app** which allows you to connect with your friends, see how you compare, exchange money, and connect with your personal finances._

### Problem

Why is your app needed? Background information around any pain points or other reasons.

_Your connectedness with money and financial health is an increasingly lonely pursuit, each person is on their own journey, and it is deemed taboo to discuss this journey in too much detail._

**Moné wants to flip that, so you can check how you're doing financially against other consenting friends or family.**

_We will also provide functionality to engage an AI chat to provide personal insight into your finances and also a way to exchange money with your closest connections. Maybe you need money for a deposit, but don't have the capital yet, maybe asking a friend with longer term saving goals for the money could be a healthy alternative to a bank or loan provider._

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

_The main users will be those used to digital banking and who trust their data with a digital system. Users may also feel confused by their financial health or may struggle with poor financial habits and want to make a change._

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

1. Dashboard to see a graphical representation of your finances and the finances of your connections
2. A way to bring connections into your dashboard (sign-up request)
3. A loan request process between your connections
4. AI enabled chatbot which takes your personal transaction data

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- Node JS
- MySQL
- React Router
- Formik (forms)
- Nivo (data vis)
- Framer Motion (cursor animation)
- Knex
- Express

### APIs

List any external sources of data that will be used in your app.

- Open Banking Data (this will be limited by authentication and licensing)
- OpenAI assistance API
- Monzo API
-

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- I want a dynamic single page application which conditionally loads components into the page depending on the user interaction

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

https://www.figma.com/file/D9VmSHLKPvOsX37yL2Jo7s/Capstones-BS?type=design&node-id=0%3A1&mode=design&t=lgFUrfWmz2gT9hKm-1

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

https://drawsql.app/teams/rory-1/diagrams/coin-capstone

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

.get / transactions / accounts / responses / threads

.post / messages / loans / messages / threads

.put / users

.delete / users / messages / threads

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

**Epic 1: Finance API + DB (OB API or Monzo API) -- 2 days** <br>

_I need to ensure I can get financial data through for myself at least and place this into a structured database. This Epic would also include building the first dashboard page so the Server + Client relationship can be established_

**Epic 2: OpenAI API (gpt or Assistant API) / Chat Assistant -- 3 days** <br>

_Epic 2 would focus on the functionality around using the OpenAI API for a chat bot feature, and establishing the working connection between threads, messages, and responses. This Epic would then form the basis of the chatbot page on the front-end_

**Epic 3: Connections -- 1 day**

_Epic 3 would focus on functionality to add connections to your site via a form connected with a backend. I would also need to establish a link between users _

**Epic 4: UX/Animations -- 2 days**

_Epic 4 would focus on refining the UX side of the site and adding in fun animations to make the project engaging_

**Epic 5: Bug Fix -- rest of the time**

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Loan functionality

Requesting the chatbot assistant sets you budgets, reminders, and goals
