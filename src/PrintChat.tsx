import { Document, Font, Page, StyleSheet, Text } from "@react-pdf/renderer";

interface Message {
  id: string;
  title: string;
  text: string;
  user: string;
  myself: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    title: "Hello",
    text: "Hello World",
    user: "John",
    myself: false,
  },
  {
    id: "2",
    title: "Hello",
    text: "Hello World",
    user: "John",
    myself: true,
  },
];

export const PrintChat = () => {
  return (
    <Document>
      <Page style={styles.body}>
        {messages.map((message) => (
          <>
            <Text style={styles.title}>{message.title}</Text>
            <Text style={styles.text}>{message.text}</Text>
          </>
        ))}
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
