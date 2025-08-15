import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import Checkbox from "../components/Checkbox";
import Switch from "../components/Switch";
import LoadingSpinner from "../components/LoadingSpinner";
import Table, { Column } from "../components/Table";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Tooltip } from "../components/Tooltip";
import { Divider } from "../components/Divider";
import { Modal } from "../components/Modal";
import { Pagination } from "../components/Pagination";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useToast } from "@/context/toastContext";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

const sampleUsers: User[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

const columns: Column<User>[] = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  {
    header: "Actions",
    accessor: (user) => (
      <Button
        variant="secondary"
        size="sm"
        onClick={() => alert(`User: ${user.id}`)}
      >
        View
      </Button>
    ),
  },
];

export default function DesignSystem() {
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { showToast } = useToast();

  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Design System" }]}
      />

      <h1 className="text-3xl font-bold">Design System</h1>

      <Divider />

      <section>
        <p className="text-xl font-bold">Buttons</p>
        <Button
          className="mr-3"
          variant="primary"
          onClick={() => showToast("Saved successfully!", "success")}
        >
          Primary
        </Button>
        <Button variant="secondary">Secondary</Button>
      </section>

      <Divider />

      <section>
        <p className="text-xl font-bold">ALERTS</p>
        <Button
          className="mr-3"
          variant="primary"
          onClick={() => showToast("Saved successfully!", "success")}
        >
          success
        </Button>
        <Button
          variant="secondary"
          onClick={() => showToast("Saved successfully!", "error")}
        >
          Secondary
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cards & Badges</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card title="Card Title">
            <p>This is a simple card.</p>
            <Badge variant="primary">New</Badge>
            <Badge variant="success">Success</Badge>
          </Card>
        </div>
      </section>

      <Divider />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tooltip</h2>
        <Tooltip text="This is a tooltip">
          <Button variant="primary">Hover me</Button>
        </Tooltip>
      </section>

      <Divider />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Form Controls</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <TextInput label="Text Input" placeholder="Type…" />
          <Select
            label="Select"
            options={[
              { label: "A", value: "a" },
              { label: "B", value: "b" },
            ]}
          />
          <TextArea label="Text Area" rows={3} />
          <Checkbox label="Checkbox Label" />
          <Switch label="Toggle Switch" />
        </div>
      </section>

      <Divider />

      <section>
        <p className="text-xl font-bold">Alerts</p>
        <Button
          className="mr-3"
          variant="secondary"
          onClick={() => showToast("Saved successfully!", "success")}
        >
          Show success toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => showToast("Saved successfully!", "error")}
        >
          Show error toast
        </Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Spinner</h2>
        <LoadingSpinner />
      </section>

      <Divider />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Table & Pagination</h2>
        <Table data={sampleUsers} columns={columns} />
        <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
      </section>

      <Divider />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Example Modal"
        >
          <p>This is modal content.</p>
        </Modal>
      </section>
    </div>
  );
}
